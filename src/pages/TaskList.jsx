import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import TaskRow from '../components/TaskRow';

function TaskList() {
  const { tasks, addTask } = useContext(GlobalContext);

  return (
    <>
      <h1>Lista Task</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Stato</th>
            <th>Data di Creazione</th>
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
