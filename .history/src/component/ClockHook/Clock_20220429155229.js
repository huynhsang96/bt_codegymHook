import React from "react";

const Clock = () => {
	const now = new Date();
	const years = now.getFullYear();
	const months = now.getMonth() + 1;
	const days = now.getDate();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	console.log(years, months, days, hours, minutes, seconds);

	return <div></div>;
};

export default Clock;
