import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from '../Todos/TodoForm';
import TodoList from '../Todos/TodoList';
import TodosActions from '../Todos/TodosActions';
import Pagination from '../Ui/pagination';

function Main() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
      ...text,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  const count = todos.length;
  const pageSize = 3;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
  };
  const todoCrop = paginate(todos, currentPage, pageSize);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompleteTodos={deleteCompletedTodosHandler}
        />
      )}

      <TodoList
        todos={todoCrop}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
      <Pagination
        itemTodos={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Main;
