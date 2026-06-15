import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import TaskRow from '../components/TaskRow';

function TaskList() {
  const { tasks } = useContext(GlobalContext);

  return (
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
  );
}
export default TaskList;
