import React from "react";
import "./Box.css";

const Box = ({ id, color, width, height, removeBox }) => {
	const style = {
		backgroundColor: color,
		width: `${width}px`,
		height: `${height}px`,
	};
	const handleRemove = (e) => {
		removeBox({ id, color, width, height });
	};
	return (
		<div className="Box-group" role="row">
			<div role="cell" className="Box" style={style}></div>
			<button className="Box-remove" onClick={handleRemove}>
				X
			</button>
		</div>
	);
};

export default Box;
