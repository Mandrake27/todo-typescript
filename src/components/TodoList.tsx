import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
  todos: ITodo[],
  handleToggle: (id: number) => void
  handleRemove: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({todos, handleToggle, handleRemove}) => {
  if (todos.length === 0) {
    return (
      <p className="center">Дел, нет...</p>
    )
  }

  const onRemove = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    handleRemove(id);
  }
  return (
    <ul className="todoList">
      {todos.map(todo => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('completed');
        }
        return (
        <li key={todo.id} className={classes.join(' ')}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span>{todo.title}</span>
            <i
              className="material-icons red-text"
              onClick={event => onRemove(event, todo.id)}
            >
              delete
            </i>
          </label>
        </li>
      )})}
    </ul>
  );
}

export default TodoList;
