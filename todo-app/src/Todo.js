import React from "react";

const Todo = ({ id, task, deleteTodo }) => {
	const handleDelete = (e) => {
		deleteTodo({ id, task });
	};
	return (
		<li className="Todo">
			<span>{task}</span>
			<button className="Todo-delete" onClick={handleDelete}>
				X
			</button>
		</li>
	);
};

export default Todo;
