import { GlobalContext } from '../context/GlobalContext';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

function TaskDetail() {
  const { tasks, removeTask } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
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
    <>
      <div className="container">
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>{task.status}</p>
        <p>{task.createdAt}</p>

        <button className="btn btn-danger" onClick={(e) => setShow(true)}>
          Elimina Task
        </button>
      </div>
      {show && (
        <Modal
          title={task.title}
          content={task.description}
          show={show}
          onClose={(e) => setShow(false)}
          onConfirm={remove}
        ></Modal>
      )}
    </>
  );
}

export default TaskDetail;
