import React, { useEffect, useState } from 'react';
import Button from '../Ui/Button';
import { validator } from '../Ui/validator';
// import styles from './TodoForm.module.css';

const initialState = {
  username: '',
  email: '',
  textTodo: '',
};

function TodoForm({ addTodo, completedTodosExist }) {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [formState]);
  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения',
      },
    },
    username: {
      isRequired: {
        message: 'Имя пользователя обязателено для заполнения',
      },
    },
    textTodo: {
      isRequired: {
        message: 'Текст задачи обязателен для заполнения',
      },
    },
  };

  const validate = () => {
    const errors = validator(formState, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    addTodo(formState);
    setFormState(initialState);
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
        <p style={{ color: 'red' }}>{errors && errors.username}</p>
        <input
          name="username"
          className="form-control mb-3"
          placeholder="username"
          value={formState.username}
          onChange={onChangehandler}
        />

        <label htmlFor="email">Email</label>
        <p style={{ color: 'red' }}>{errors && errors.email}</p>
        <input
          name="email"
          className="form-control mb-3"
          placeholder="test@test.com"
          value={formState.email}
          onChange={onChangehandler}
        />
        <label htmlFor="textTodo">Текст задачи</label>
        <p style={{ color: 'red' }}>{errors.textTodo}</p>
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
