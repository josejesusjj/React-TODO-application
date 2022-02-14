import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import InputTask from "./input.jsx";
import Database from "./database.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<InputTask />
		</div>
	);
};

export default Home;
