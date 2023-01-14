import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", () => {
	render(<TodoList />);
});

it("should match snapshot", () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

it("should render a list of todos", () => {
	const { getByText } = render(<TodoList />);
	expect(getByText("Clean the garage")).toBeInTheDocument();
});

it("should render a NewTodoForm", () => {
	const { getByText, getByLabelText } = render(<TodoList />);
	expect(getByLabelText("Task")).toBeInTheDocument();
	expect(getByText("Add Task")).toBeInTheDocument();
});

it("should add a new Todo", () => {
	const { queryByText, getByLabelText } = render(<TodoList />);
	// Shouldn't include Test todo
	expect(queryByText("Test")).not.toBeInTheDocument();
	// Add todo
	const input = getByLabelText("Task");
	const btn = queryByText("Add Task");
	fireEvent.change(input, { target: { value: "Test" } });
	fireEvent.click(btn);
	// Should include Test todo
	expect(queryByText("Test")).toBeInTheDocument();
});

it("should remove a todo", () => {
	const { queryAllByText } = render(<TodoList />);
	let buttons = queryAllByText("X");
	expect(buttons).toHaveLength(2);
	buttons.map((btn) => fireEvent.click(btn));
	buttons = queryAllByText("X");
	expect(buttons).toHaveLength(0);
});
