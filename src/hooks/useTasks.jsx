import { useState, useEffect } from 'react';

function useTasks() {
  const apiurl = import.meta.env.VITE_API_URL;

  const [tasks, setTask] = useState([]);

  function addTask(newTask) {
    console.log(newTask);

    const taskConvertedJson = JSON.stringify(newTask);

    return fetch(`${apiurl}/tasks`, {
      method: `POST`,
      body: taskConvertedJson,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setTask([...tasks, data.task]);
        } else {
          console.log(data.message);
          throw new Error(data.message);
        }
      });
  }

  function removeTask(taskId) {
    return fetch(`${apiurl}/tasks/${taskId}`, {
      method: `DELETE`,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setTask(tasks.filter((task) => task.id !== taskId));
        } else {
          console.log(data.message);
          throw new Error(data.message);
        }
      });
  }

  function updateTask(task) {
    console.log(task);

    const taskConvertedJson = JSON.stringify(task);

    return fetch(`${apiurl}/tasks/${task.id}`, {
      method: `PUT`,
      body: taskConvertedJson,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setTask(tasks.map((t) => (t.id === data.task.id ? data.task : t)));
        } else {
          console.log(data.message);
          throw new Error(data.message);
        }
      });
  }

  useEffect(() => {
    fetch(`${apiurl}/tasks`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTask(data);
      });
  }, []);

  return [tasks, setTask, addTask, removeTask, updateTask];
}

export default useTasks;
