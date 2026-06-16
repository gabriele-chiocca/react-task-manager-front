import { useRef, useState } from 'react';

function AddTask() {
  const [nameTask, setNameTask] = useState('');
  const [nameTouched, setNameTouched] = useState(false);

  const descriptionRef = useRef();
  const statusRef = useRef();

  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\";

  const verifyNameTask = () => {
    if (nameTask === '') {
      return console.log('Nome non compilato');
    } else if (nameTask.includes(symbols)) {
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
    } else {
      console.log('Non hai compilato i campi in modo corretto');
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
            <button className="btn btn-primary" type="sumbit">
              Invia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddTask;
