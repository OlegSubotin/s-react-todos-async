import { useDispatch } from 'react-redux';
import { removeTodo, toggleStatus } from 'store/todoSlice';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const removeTask = id => {
    dispatch(removeTodo(id));
  };

  const toggleTask = id => {
    dispatch(toggleStatus(id));
  };

  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      <span>{title}</span>
      <span className="deleteBtn" onClick={() => removeTask(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
