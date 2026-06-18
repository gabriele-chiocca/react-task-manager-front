import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

function TaskDetail() {
  const { tasks, addTask } = useContext(GlobalContext);

  const { id } = useParams();

  const task = tasks.find((task) => task.id === Number(id));

  console.log(id);

  if (!task) {
    return <p>Task non trovata</p>;
  }

  return (
    <div className="container">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <p>{task.createdAt}</p>
      <button
        className="btn btn-danger"
        onClick={(e) => console.log('Elimino Task')}
      >
        Elimina Task
      </button>
    </div>
  );
}

export default TaskDetail;
