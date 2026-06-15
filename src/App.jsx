import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';

function App() {
  return (
    <BrowserRouter>
      <div className="container ">
        <div className="p-3">
          <Header></Header>

          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add-task" element={<AddTask />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
