import { arrayOf } from "prop-types";
import React, { useState } from "react";
//notas: para agregar un nuevo item a un array es arr.push()
const InputTask = () => {
	const [text, setText] = useState("");

	const [tasklist, setTasklist] = useState([
		{ name: "comer" },
		{ name: "vivir" },
		{ name: "dormir" },
	]);

	const handleClick = (event) => {
		console.log(event.target.value);
	};

	const handleChange = (event) => {
		console.log(event.target.value);
		setText(event.target.value);
	};

	return (
		<div>
			<h3>{text}</h3>
			<input type="text" name="search" onChange={handleChange} />
			<button onClick={handleClick}>Create</button>
			<p></p>
			<p></p>
			<p></p>
			<ul>
				{tasklist.map((value, index) => {
					return (
						<li key={index}>
							{value.name} index: {index}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default InputTask;
