import { render } from "@testing-library/react";
import Box from "./Box";

const BOX = <Box id={1} color={"white"} width={100} height={100} key={1} />;

it("renders without crashing", () => {
	render(<Box />);
});

it("matches snapshot", () => {
	const { asFragment } = render(BOX);
	expect(asFragment()).toMatchSnapshot();
});

it("renders box with styles", () => {
	const { getByRole } = render(BOX);
	const box = getByRole("cell");
	expect(box).toHaveStyle("background-color:white; width:100px; height:100px");
});

it("renders delete button", () => {
	const { getByText } = render(BOX);
	const button = getByText("X");
	expect(button).toBeInTheDocument();
});
