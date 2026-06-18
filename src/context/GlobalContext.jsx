import { createContext, useEffect, useState } from 'react';
import useTasks from '../hooks/useTasks';
const GlobalContext = createContext();
function GlobalProvider({ children }) {
  const [tasks, setTask, addTask] = useTasks();

  return (
    <GlobalContext.Provider value={{ tasks, setTask, addTask }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
