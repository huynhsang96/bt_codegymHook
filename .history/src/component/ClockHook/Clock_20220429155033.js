import React from "react";

const Clock = () => {
	const now = new Date();
	const years = new Date(now.getFullYear(), now.getMonth());
	console.log(years);
	return <div></div>;
};

export default Clock;
