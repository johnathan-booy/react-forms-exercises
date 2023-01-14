import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import "./BoxList.css";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
	const INITIAL_STATE = [
		{ id: uuid(), color: "Aquamarine", width: 100, height: 100 },
		{ id: uuid(), color: "BlanchedAlmond", width: 120, height: 120 },
	];
	const [boxes, setBoxes] = useState(INITIAL_STATE);
	const addBox = (newBox) => {
		setBoxes((boxes) => [...boxes, { id: uuid(), ...newBox }]);
	};
	const removeBox = (deleteBox) => {
		setBoxes((boxes) => boxes.filter((box) => box.id !== deleteBox.id));
	};
	return (
		<div className="BoxList">
			<h3>Color Boxes</h3>
			<NewBoxForm addBox={addBox} />
			<div className="BoxList-boxes">
				{boxes.map(({ id, color, width, height }) => (
					<Box
						id={id}
						key={id}
						color={color}
						width={width}
						height={height}
						removeBox={removeBox}
					/>
				))}
			</div>
		</div>
	);
};

export default BoxList;
