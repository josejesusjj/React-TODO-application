import { arrayOf } from "prop-types";
import React, { useState } from "react";
//notas: para agregar un nuevo item a un array es arr.push()

const InputTask = () => {
	//aqui va las const para el input
	const [text, setText] = useState("i");

	const handleChange = (event) => {
		setText(event.target.value);
	};

	//aqui van para el database

	const tasklist = [{ name: "comer" }, { name: "vivir" }];

	const [task, setTask] = useState("i");

	const handleClick = (event) => {
		setTask(event.target.value);
	};

	return (
		<div>
			<h3>{text}</h3>
			<input type="text" name="search" onChange={handleChange} />
			<button type="task" name="search" onClick={handleClick}>
				<input />
				Create
			</button>
			<h3>{task}</h3>
			<p></p>
			<ul>
				{tasklist.map((value, index) => {
					return (
						<li key={index}>
							{value.name} {index}
						</li>
					);
				})}
			</ul>
			<p></p>
		</div>
	);
};

export default InputTask;
