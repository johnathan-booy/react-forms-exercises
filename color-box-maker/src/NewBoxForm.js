import React, { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = {
		color: "",
		width: 100,
		height: 100,
	};
	const [formData, setFormData] = useState(INITIAL_STATE);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addBox({ ...formData });
		setFormData(INITIAL_STATE);
	};

	return (
		<form className="NewBoxForm" onSubmit={handleSubmit}>
			<div className="NewBoxForm-group">
				<label htmlFor="color">Color</label>
				<input
					id="color"
					name="color"
					type="text"
					value={formData.color}
					onChange={handleChange}
				/>
			</div>

			<div className="NewBoxForm-group">
				<label htmlFor="width">Width</label>
				<input
					id="width"
					name="width"
					type="number"
					value={formData.width}
					onChange={handleChange}
				/>
			</div>

			<div className="NewBoxForm-group">
				<label htmlFor="height">Height</label>
				<input
					id="height"
					name="height"
					type="number"
					value={formData.height}
					onChange={handleChange}
				/>
			</div>
			<div className="NewBoxForm-group">
				<button>Add Box</button>
			</div>
		</form>
	);
};

export default NewBoxForm;
