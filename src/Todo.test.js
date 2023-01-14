import { render, asFragment } from "@testing-library/react";
import Todo from "./Todo";

const TODO = <Todo id={1} task="Get the mail" />;
it("renders without crashing", () => {
	render(<Todo />);
});

it("should match snapshot", () => {
	const { asFragment } = render(TODO);
	expect(asFragment()).toMatchSnapshot();
});

it("should display task", () => {
	const { getByText } = render(TODO);
	expect(getByText("Get the mail")).toBeInTheDocument();
});

it("should display delete button", () => {
	const { getByText } = render(TODO);
	expect(getByText("X")).toBeInTheDocument();
});
