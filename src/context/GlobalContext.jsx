import { createContext, useEffect, useState } from 'react';
import useTasks from '../hooks/useTasks';
const GlobalContext = createContext();
function GlobalProvider({ children }) {
  const [tasks, setTask] = useTasks();

  return (
    <GlobalContext.Provider value={{ tasks, setTask }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
