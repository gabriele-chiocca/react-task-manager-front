import { createContext, useEffect, useState } from 'react';
const GlobalContext = createContext();
function GlobalProvider({ children }) {
  const [tasks, setTask] = useState([]);

  const apiurl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiurl}/tasks`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTask(data);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ tasks, setTask }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
