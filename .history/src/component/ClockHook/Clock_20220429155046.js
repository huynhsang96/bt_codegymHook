import React from "react";

const Clock = () => {
	const now = new Date();
	const years = now.getFullYear();
	console.log(years);
	return <div></div>;
};

export default Clock;
