import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import TaskDetail from './pages/TaskDetail';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="container ">
          <div className="p-3">
            <Header></Header>

            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/add-task" element={<AddTask />} />
              <Route path="/task/:id" element={<TaskDetail />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
