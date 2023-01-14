import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
	const [task, setTask] = useState("");

	const handleChange = (e) => {
		setTask(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(task);
		setTask("");
	};

	return (
		<form className="NewTodoForm" onSubmit={handleSubmit}>
			<label htmlFor="task">Task</label>
			<input id="task" type="text" value={task} onChange={handleChange}></input>
			<button>Add Task</button>
		</form>
	);
};

export default NewTodoForm;
