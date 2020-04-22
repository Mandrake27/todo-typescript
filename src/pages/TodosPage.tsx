import React, { Fragment, useState, useEffect } from 'react';
import { ITodo } from '../interfaces';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const save = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(save);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    setTodos(prev => [newTodo, ...prev]);
  }

  const handleToggle = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const handleRemove = (id: number) => {
    const shouldRemove = window.confirm(
      'Вы уверены что хотите удалить элемент?'
    )
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };
  return (
    <Fragment>
      <TodoForm
        handleAdd={handleAddTodo}
      />
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    </Fragment>
  );
}

export default TodosPage;
