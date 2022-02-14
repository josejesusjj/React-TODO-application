import React from "react";

const Database = () => {
	const tasklist = [{ name: "comer" }, { name: "vivir" }];

	const handleChange = (event) => {
		console.log(arr.push(event.target.value));
	};

	return (
		<div>
			<ul>
				{tasklist.map((value, index) => {
					return <li key={index}></li>;
				})}
			</ul>
		</div>
	);
};

export default Database;
