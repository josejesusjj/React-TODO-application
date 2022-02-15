import React from "react";
const Database = () => {
	const tasklist = [{ name: "comer" }, { name: "vivir" }];

	const numbers = [1, 2, 3, 4, 5];
	const listItems = numbers.map((number) => <li>{number}</li>);

	return (
		<div>
			<ul>
				{tasklist.map((value, index) => {
					return (
						<li key={index}>
							{value.name} {index}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Database;
