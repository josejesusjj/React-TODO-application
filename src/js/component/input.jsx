import React, { useState } from "react";

const InputTask = () => {
	const [text, setText] = useState("");

	const handleChange = (event) => {
		console.log(event.target.value);
		setText(event.target.value);
	};

	return (
		<div>
			<h3>{text}</h3>
			<input type="text" name="search" onChange={handleChange} />
			<button>Create</button>
		</div>
	);
};

export default InputTask;
