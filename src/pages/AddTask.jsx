import { useRef, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function AddTask() {
  const [nameTask, setNameTask] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const { tasks, addTask } = useContext(GlobalContext);

  const descriptionRef = useRef();
  const statusRef = useRef();

  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\";

  const verifyNameTask = () => {
    if (nameTask === '') {
      return console.log('Nome non compilato');
    } else if ([...nameTask].some((char) => symbols.includes(char))) {
      return console.log('Il nome contiene simboli speciali');
    } else {
      console.log('Nome compilato correttamente');
      return true;
    }
  };

  function submit(e) {
    e.preventDefault();

    if (descriptionRef && statusRef !== '') {
      console.log(
        `  Name : ${nameTask}
         Description: ${descriptionRef.current.value}
         Status: ${statusRef.current.value}
      `,
      );

      addTask({
        title: nameTask,
        description: descriptionRef.current.value,
        status: statusRef.current.value,
      })
        .then(() => {
          alert('Task creata correttamente');

          setNameTask('');
          setNameTouched(false);
          statusRef.current.value = 'To do';
          descriptionRef.current.value = '';
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }

  return (
    <div className="container mt-5">
      <h1>Form registrazione</h1>

      <div>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Nome Task
            </label>
            <input
              type="text"
              className="form-control"
              id="input-name"
              placeholder="Inserisci il nome della task"
              value={nameTask}
              onChange={(e) => setNameTask(e.target.value)}
              onBlur={(e) => setNameTouched(true)}
            />
            {nameTouched && !verifyNameTask() && (
              <div className="mt-2  text-danger">
                <p className="h5">
                  Nome compilato non valido, hai inserito caratteri speciali o è
                  vuoto
                </p>
              </div>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputSpecializzazione"
              className="form-label"
            >
              Stato Task
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              ref={statusRef}
            >
              <option>To do</option>
              <option>Doing</option>
              <option>Done</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputDescription" className="form-label">
              Descrivi la tua esperienza da sviluppatore
            </label>
            <textarea
              rows={3}
              type="text-area"
              className={`form-control `}
              id="input-description"
              placeholder="Inserisci qui la descrizione"
              ref={descriptionRef}
            />
          </div>

          <div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={!verifyNameTask()}
            >
              Invia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddTask;
