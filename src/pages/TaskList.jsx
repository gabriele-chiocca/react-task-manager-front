import { useContext, useMemo, useState, useCallback } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import TaskRow from '../components/TaskRow';

function TaskList() {
  const { tasks, addTask } = useContext(GlobalContext);

  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  function debounce(callback, delay) {
    let timer;
    return (value) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(value);
      }, delay);
    };
  }

  const debounceSearch = useCallback(
    debounce((value) => {
      searchQuery(value);
    }, 500),
    [],
  );

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
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const tasksCopy = [...filteredTasks];

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
  }, [tasks, sortBy, sortOrder, searchQuery]);

  return (
    <>
      <h1>Lista Task</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca qui la task"
          aria-label="Cerca qui la task"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
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
