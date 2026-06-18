import { createContext, useEffect, useState } from 'react';
import useTasks from '../hooks/useTasks';
const GlobalContext = createContext();
function GlobalProvider({ children }) {
  const [tasks, setTask, addTask, removeTask] = useTasks();

  return (
    <GlobalContext.Provider value={{ tasks, setTask, addTask, removeTask }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
