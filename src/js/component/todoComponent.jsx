import React, { useState, useEffect } from "react";

//This component create a tasklist
const TodoComponent = () => {
	const [input_task, set_Input_task] = useState("");
	const [Object, setObject] = useState([]);
	const [task_list, setTask_list] = useState([]);

	const addText = (task) => {
		let newTask = [...task_list, task];
		setTask_list(newTask);
	};
	const addObject = (task) => {
		let newObject = [...Object, { label: task, done: false }];
		setObject(newObject);
	};
	const handleKey = (e) => {
		if (e.key === "Enter" && input_task !== " " && input_task !== "") {
			addText(input_task);
			addObject(input_task);
			set_Input_task("");
			console.log(Object);
		}
	};

	const DeleteItems = (indexItem) => {
		setTask_list((prevState) =>
			prevState.filter((f, index) => index !== indexItem)
		);
		setObject((prevState) =>
			prevState.filter((f, index) => index !== indexItem)
		);
	};

	const itemleft = task_list.length;

	//Creating the api user
	const start = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/josecedeno", {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
	};

	const retrieve = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/josecedeno", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
				setTask_list(data);
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
	};

	//Deleting the api user
	const deleteAll = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/josecedeno", {
			method: "DELETE",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
	};

	//Updating the list
	const updating = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/josecedeno", {
			method: "PUT",
			body: JSON.stringify(Object),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log(resp.ok); // will be true if the response is successfull
				console.log(resp.status); // the status code = 200 or code = 400 etc.
				console.log(resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
			})
			.catch((error) => {
				//error handling
				console.log(error);
			});
	};

	useEffect(() => {
		start();
		retrieve();
	}, []);

	return (
		<div className="bodyapp contain">
			{/*<button
				onClick={start}
				className="btn btn-primary m-3"
				type="submit">
				Initialize
	</button>*/}
			<button
				onClick={updating}
				className="btn btn-primary m-3"
				type="submit">
				Save
			</button>
			<button
				onClick={deleteAll}
				className="btn btn-primary m-3"
				type="submit">
				Finish
			</button>
			{/*<button
				onClick={retrieve}
				className="btn btn-primary m-3"
				type="submit">
				retrieve
			</button>*/}
			<h1 className=" fw-light title">todos</h1>
			<div className="input list-group tasklist"></div>
			<div className="bodyapp">
				<div className="task_list list-group tasklist fs-3">
					<input
						type="task"
						onKeyPress={(e) => {
							handleKey(e);
							updating(e);
							console.log(e);
							console.log("object: ", Object);
							console.log("task_list: " + task_list);
							console.log("input_task: " + input_task);
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
								<p className="p-2 w-100 fs-3 fw-light ">
									{t.label}
								</p>
								<input
									className="form-check-input m-4"
									name="done"
									type="checkbox"
									value="true"
								/>

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
				</div>
			</div>
		</div>
	);
};
export default TodoComponent;
