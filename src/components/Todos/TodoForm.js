import { useState } from 'react';
import Button from '../Ui/Button';
// import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    textTodo: '',
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(formState);
    setFormState({
      username: '',
      email: '',
      textTodo: '',
    });
  };

  const onChangehandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    // <div className={styles.todoFormContainer}>
    <div className="form-control mb-3 bg-light">
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Имя пользователя</label>
        <input
          name="username"
          className="form-control mb-3"
          placeholder="username"
          value={formState.username}
          onChange={onChangehandler}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          className="form-control mb-3"
          placeholder="test@test.com"
          value={formState.email}
          onChange={onChangehandler}
        />
        <label htmlFor="textTodo">Текст задачи</label>
        <input
          name="textTodo"
          className="form-control mb-3"
          placeholder="Enter new todo"
          value={formState.textTodo}
          onChange={onChangehandler}
        />

        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
