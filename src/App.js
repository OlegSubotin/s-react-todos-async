import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'components/Container';
import TodoList from 'components/TodoList';
import Form from 'components/Form';
import { addNewTodo, fetchTodos } from 'store/todoSlice';

const App = () => {
  const [text, setText] = useState('');
  const { status, error } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const onInputChange = e => {
    setText(e.target.value);
  };

  const addTask = e => {
    e.preventDefault();
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText('');
    }
  };

  return (
    <Container>
      <Form onInputChange={onInputChange} addTodo={addTask} text={text} />
      {status === 'loading' && <h2>loading...</h2>}
      {error && <h2>ERROR: {error}</h2>}
      <TodoList />
    </Container>
  );
};

export default App;
