import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
	const INITIAL_STATE = [
		{ id: uuid(), task: "Clean the garage" },
		{ id: uuid(), task: "Fold the laundry" },
	];
	const [todoList, setTodoList] = useState(INITIAL_STATE);
	const addTodo = (task) => {
		setTodoList((todoList) => [...todoList, { id: uuid(), task: task }]);
	};
	const deleteTodo = (dTodo) => {
		setTodoList((todoList) => todoList.filter((todo) => todo.id !== dTodo.id));
	};
	return (
		<div className="TodoList">
			<h3 className="TodoList-title">Todo List</h3>
			<NewTodoForm addTodo={addTodo} />
			<ul className="TodoList-list">
				{todoList.map(({ id, task }) => (
					<Todo id={id} key={id} task={task} deleteTodo={deleteTodo} />
				))}
			</ul>
		</div>
	);
};

export default TodoList;
