import { arrayOf } from "prop-types";
import React, { useState } from "react";
//notas: para agregar un nuevo item a un array es arr.push()

const InputTask = () => {
	//aqui va las const para el input

	//aqui van para el database

	const tasklist = [{ name: "comer" }, { name: "vivir" }];

	const [text, setText] = useState("i");

	const handleClick = (event) => {
		setText(event.target.value);
		tasklist.push("{text}");
	};

	return (
		<div id="bodyapp">
			<h1 id="title">todos</h1>
			<h3>{text}</h3>

			<ul class="list-group tasklist">
				<button
					type="task"
					name="event "
					onClick={handleClick}
					class="list-group-item">
					<input />
				</button>
				{tasklist.map((value, index) => {
					return (
						<li key={index} class="list-group-item">
							<tr>
								<td id="task">{value.name}</td>
								<td id="index">{index}</td>
							</tr>
						</li>
					);
				})}
			</ul>
			<div class="footer list-group-item">item left</div>
		</div>
	);
};

export default InputTask;
