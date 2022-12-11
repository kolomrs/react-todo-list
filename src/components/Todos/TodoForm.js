import { useState } from 'react';
import Button from '../Ui/Button';
// import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    // <div className={styles.todoFormContainer}>
    <div className="form-control mb-3 bg-light">
      <form onSubmit={onSubmitHandler}>
        <input
          className="form-control mb-3"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
