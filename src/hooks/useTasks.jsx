import { useState, useEffect } from 'react';

function useTasks() {
  const apiurl = import.meta.env.VITE_API_URL;

  const [tasks, setTask] = useState([]);

  function addTask() {
    return;
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

  return [tasks, setTask];
}

export default useTasks;
