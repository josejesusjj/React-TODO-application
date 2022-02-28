import React from "react";
import InputTask from "./input.jsx";
import TodoComponent from "./todoComponent.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<InputTask />
			<TodoComponent />
		</div>
	);
};

export default Home;
