import { useRef, useState, useEffect } from 'react';

import Modal from './Modal';

function EditTaskModal({ show, onClose, task, onSave }) {
  const editFormRef = useRef(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To do');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [task]);

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      ...task,
      title,
      description,
      status,
    });
  }

  return (
    <Modal
      show={show}
      onClose={onClose}
      title="Modifica Task"
      confirmText="Salva"
      onConfirm={() => editFormRef.current.requestSubmit()}
      content={
        <form ref={editFormRef} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Titolo</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descrizione</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Stato</label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>To do</option>
              <option>Doing</option>
              <option>Done</option>
            </select>
          </div>
        </form>
      }
    />
  );
}

export default EditTaskModal;
