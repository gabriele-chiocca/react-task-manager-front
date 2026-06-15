import { useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function TaskRow() {
  const { tasks } = useContext(GlobalContext);

  return (
    <tbody>
      {useMemo(() => {
        return tasks.map((element) => {
          return (
            <tr key={element.id}>
              <td>{element.title}</td>
              <td
                className={
                  element.status === 'To do'
                    ? 'bg-danger text-white'
                    : element.status === 'Doing'
                      ? 'bg-warning'
                      : 'bg-success text-white'
                }
              >
                {element.status}
              </td>
              <td>{element.createdAt}</td>
            </tr>
          );
        });
      }, [tasks])}
    </tbody>
  );
}

export default TaskRow;
