import { useContext, useMemo } from 'react';

import { Link } from 'react-router-dom';

function TaskRow({ tasks }) {
  return (
    <tbody>
      {useMemo(() => {
        return tasks.map((element) => {
          return (
            <tr key={element.id}>
              <td>
                <Link to={`/task/${element.id}`}>{element.title}</Link>
              </td>
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
