import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function TaskRow() {
  const { tasks } = useContext(GlobalContext);

  return (
    <tbody>
      {tasks.map((element, i) => {
        return (
          <tr key={i}>
            <td>{element.title}</td>
            <td
              className={
                element.status === 'To do'
                  ? 'bg-danger'
                  : element.status === 'Doing'
                    ? 'bg-warning'
                    : 'bg-success'
              }
            >
              {element.status}
            </td>
            <td>{element.createdAt}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TaskRow;
