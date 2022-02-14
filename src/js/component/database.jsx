import React from "react";

const Database = () => {
	const tasklist = [{ name: "comer" }, { name: "vivir" }];

	return (
		<div>
			<ul>
				{tasklist.map((value, index) => {
					return <li>{value.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default Database;
