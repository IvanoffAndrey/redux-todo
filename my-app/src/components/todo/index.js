import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleTodo, removeTodo } from "../../store/actions/creators/todo";

import styles from './index.module.css';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleTodo(todo.id));
  }

  const removeTodoItem = () => {
    dispatch(removeTodo(todo.id));
  }

  return (
    <li className={styles.item}>
      {todo.completed ? "👌" : "👋"}{" "}
      <span onClick={toggleTodoItem}
        className={cx({
          [styles.completed]: todo.completed,
        })}
      >
        {todo.content}
      </span>{" "}
      <button onClick={removeTodoItem}>Удалить</button>
    </li>
  );
};