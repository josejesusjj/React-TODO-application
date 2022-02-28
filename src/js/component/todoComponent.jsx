import React, { useState } from "react";

//This component create a tasklist
const TodoComponent = () => {
	const [input_task, set_Input_task] = useState("");
	const [task_list, set_Task_list] = useState([]);
	const addText = (task) => {
		let newTask = [...task_list, task];
		set_Task_list(newTask);
	};
	const handleKey = (e) => {
		if (e.key === "Enter" && input_task !== " " && input_task !== "") {
			addText(input_task);
			set_Input_task("");
		}
	};
	const DeleteItems = (indexItem) => {
		set_Task_list((prevState) =>
			prevState.filter((f, index) => index !== indexItem)
		);
	};
	return (
		<div className="container-fluid bodyapp">
			<h1 id="title">todos</h1>
			<div className="input list-group tasklist">
				<input
					type="task"
					onKeyPress={(e) => {
						handleKey(e);
						console.log(e);
					}}
					onChange={(event) => {
						set_Input_task(event.target.value);
						console.log(event.target.value);
					}}
					name=""
					id=""
					value={input_task}
				/>
			</div>
			<div>
				<task_list className="task_list">
					<ul>
						{task_list.map((t, index) => (
							<li key={index} className="list-group-item index">
								{t}
								<button
									className="btn DelItem"
									onClick={() => DeleteItems(index)}>
									<i className="fas fa-times" />
								</button>
							</li>
						))}
						<tr>
							<th scope="col">ToDo-s List</th>
						</tr>
					</ul>
				</task_list>
			</div>
		</div>
	);
};
export default TodoComponent;
