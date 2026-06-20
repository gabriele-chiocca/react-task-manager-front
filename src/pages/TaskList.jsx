import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import TaskRow from '../components/TaskRow';

function TaskList() {
  const { tasks, addTask } = useContext(GlobalContext);

  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState(1);

  const orderTitle = (e) => {
    if (sortBy === 'title') {
      setSortOrder(sortOrder * -1);
    } else {
      setSortBy('title');
      setSortOrder(1);
    }
  };

  const orderStatus = (e) => {
    if (sortBy === 'status') {
      setSortOrder(sortOrder * -1);
    } else {
      setSortBy('status');
      setSortOrder(1);
    }
  };

  const orderCreatedAt = (e) => {
    if (sortBy === 'createdAt') {
      setSortOrder(sortOrder * -1);
    } else {
      setSortBy('createdAt');
      setSortOrder(1);
    }
  };

  return (
    <>
      <h1>Lista Task</h1>
      <table className="table">
        <thead>
          <tr>
            <th onClick={orderTitle}>Nome</th>
            <th onClick={orderStatus}>Stato</th>
            <th onClick={orderCreatedAt}>Data di Creazione</th>
          </tr>
        </thead>
        <TaskRow></TaskRow>
      </table>
      <button
        className="btn btn-primary"
        onClick={() =>
          addTask({
            title: 'ds',
            description: 'd',
            status: 'To do',
          })
        }
      >
        Clicca
      </button>
    </>
  );
}
export default TaskList;
