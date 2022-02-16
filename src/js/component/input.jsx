import { arrayOf } from "prop-types";
import React, { useState } from "react";
//notas: para agregar un nuevo item a un array es arr.push()

const InputTask = () => {
	//aqui va las const para el input

	//aqui van para el database

	const tasklist = [{ name: "comer" }, { name: "vivir" }, { name: "dormir" }];

	const [text, setText] = useState("nada que mostrar");

	let item = tasklist.length;

	const [itemleft, setItemleft] = useState(item);

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
					class="list-group-item ">
					<input
						class="newItem"
						placeholder="What needs to be done?"
					/>
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
			<div class="footer list-group-item">
				<p> {itemleft} item left</p>
			</div>
		</div>
	);
};

export default InputTask;
