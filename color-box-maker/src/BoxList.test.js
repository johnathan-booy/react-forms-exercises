import { fireEvent, getByLabelText, render } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
	render(<BoxList />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it("renders NewBoxForm", () => {
	const { getByLabelText, getByText } = render(<BoxList />);

	expect(getByLabelText("Color")).toBeInTheDocument();
	expect(getByLabelText("Width")).toBeInTheDocument();
	expect(getByLabelText("Height")).toBeInTheDocument();
	expect(getByText("Add Box")).toBeInTheDocument();
});

it("renders default boxes", () => {
	const { getAllByRole } = render(<BoxList />);
	const box = getAllByRole("cell");
	expect(box).toHaveLength(2);
});

it("can add a new box", () => {
	const { getAllByRole, getByLabelText, getByText } = render(<BoxList />);

	// Should initialize with two boxes
	let boxes = getAllByRole("cell");
	expect(boxes).toHaveLength(2);

	// Create a new box with the form
	const colorInput = getByLabelText("Color");
	const addButton = getByText("Add Box");
	fireEvent.change(colorInput, "green");
	fireEvent.click(addButton);

	// Should have three boxes
	boxes = getAllByRole("cell");
	expect(boxes).toHaveLength(3);
});

it("can remove a box", () => {
	const { queryAllByRole, getAllByText } = render(<BoxList />);

	// Should initialize with two boxes
	let boxes = queryAllByRole("cell");
	expect(boxes).toHaveLength(2);

	// Create a new box with the form
	const removeButtons = getAllByText("X");
	removeButtons.map((btn) => fireEvent.click(btn));

	// Should not have any boxes
	boxes = queryAllByRole("cell");
	expect(boxes).toHaveLength(0);
});
