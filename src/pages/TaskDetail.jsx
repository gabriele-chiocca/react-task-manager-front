import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function TaskDetail() {
  const { tasks, removeTask } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return <p>Task non trovata</p>;
  }

  function remove() {
    removeTask(Number(id))
      .then(() => {
        alert('Task eliminata correttamente');
        navigate(`/`);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="container">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <p>{task.createdAt}</p>

      <button className="btn btn-danger" onClick={remove}>
        Elimina Task
      </button>
    </div>
  );
}

export default TaskDetail;
