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

  function removeTask() {
    return;
  }

  function updateTask() {
    return;
  }

  useEffect(() => {
    fetch(`${apiurl}/tasks`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTask(data);
      });
  }, []);

  return [tasks, setTask, addTask];
}

export default useTasks;
