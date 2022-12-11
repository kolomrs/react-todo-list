import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../Ui/Button';
import styles from './TodosActions.module.css';

function TodosActions({
  resetTodos,
  deleteCompleteTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear completed todos"
        onClick={deleteCompleteTodos}
        disabled={!completedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
