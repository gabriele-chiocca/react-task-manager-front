import { useContext, useMemo, useState } from 'react';
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

  const sortedTasks = useMemo(() => {
    const tasksCopy = [...tasks];

    if (sortBy === 'title') {
      tasksCopy.sort((a, b) => {
        return a.title.localeCompare(b.title) * sortOrder;
      });

      return tasksCopy;
    }

    if (sortBy === 'status') {
      const statusOrder = {
        'To do': 0,
        Doing: 1,
        Done: 2,
      };
      tasksCopy.sort((a, b) => {
        return (statusOrder[a.status] - statusOrder[b.status]) * sortOrder;
      });

      return tasksCopy;
    }

    if (sortBy === 'createdAt') {
      tasksCopy.sort((a, b) => {
        return (
          (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) *
          sortOrder
        );
      });

      return tasksCopy;
    }
  }, [tasks, sortBy, sortOrder]);

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

        <TaskRow tasks={sortedTasks}></TaskRow>
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
