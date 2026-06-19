import { GlobalContext } from '../context/GlobalContext';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import EditTaskModal from '../components/EditTaskModal';

function TaskDetail() {
  const { tasks, removeTask, updateTask } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [showEdit, setShowEdit] = useState(false);

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return <p>Task non trovata</p>;
  }

  function saveEditedTask(updatedTask) {
    updateTask(updatedTask)
      .then(() => {
        alert('Task modificata correttamente');
        setShowEdit(false);
      })
      .catch((error) => {
        alert(error.message);
      });
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
        <div>
          <button className="btn btn-danger" onClick={(e) => setShow(true)}>
            Elimina Task
          </button>
          <button
            className="btn btn-warning ms-3"
            onClick={(e) => setShowEdit(true)}
          >
            Modifica Task
          </button>
        </div>
      </div>
      {show && (
        <Modal
          title={task.title}
          content={task.description}
          show={show}
          onClose={(e) => setShow(false)}
          onConfirm={remove}
          confirmText={'Elimina'}
        ></Modal>
      )}
      {showEdit && (
        <EditTaskModal
          show={showEdit}
          onClose={(e) => setShowEdit(false)}
          task={task}
          onSave={saveEditedTask}
        ></EditTaskModal>
      )}
    </>
  );
}

export default TaskDetail;
