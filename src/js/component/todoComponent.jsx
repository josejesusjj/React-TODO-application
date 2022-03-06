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

	const itemleft = task_list.length;

	return (
		<div className="bodyapp contain">
			<h1 className=" fw-light title">todos</h1>
			<div className="input list-group tasklist"></div>
			<div className="bodyapp">
				<task_list className="task_list list-group tasklist fs-3">
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
						placeholder="What needs to be done?"
					/>
					<ul className="list">
						{task_list.map((t, index) => (
							<li
								key={index}
								className="list-group-item index d-flex text-secondary ps-5 shadow">
								<p className="p-2 w-100 fs-3 fw-light ">{t}</p>
								<button
									className="btn DelItem text-end text-danger"
									onClick={() => DeleteItems(index)}>
									<i className="fa fa-trash p-2 flex-shrink-1" />
								</button>
							</li>
						))}
						<p className="footer list-group-item shadow">
							{" "}
							{itemleft} item left
						</p>
						<p className="endZone list-group-item shadow"></p>
						<p className="endZone2 list-group-item shadow "></p>
					</ul>
				</task_list>
			</div>
		</div>
	);
};
export default TodoComponent;
