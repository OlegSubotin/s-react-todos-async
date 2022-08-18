const Form = ({ text, onInputChange, addTodo }) => {
  return (
    <form>
      <label>
        <input type="text" value={text} onChange={onInputChange} />
      </label>
      <button type="submit" onClick={addTodo}>
        add todo
      </button>
    </form>
  );
};

export default Form;
