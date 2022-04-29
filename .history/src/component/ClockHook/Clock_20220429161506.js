import React, { useEffect, useState } from "react";

const Clock = () => {
	const [now, setNow] = useState(new Date());
	useEffect(() => {
		const timer = setInterval(() => {
			setNow(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, [now]);
	const years = now.getFullYear();
	const months = now.getMonth() + 1;
	const days = now.getDate();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	// console.log(seconds < 10 ? "0" + seconds : seconds);

	return (
		<div className="p-5 w-full h-full max-w-[500px]">
			<div>
				<span className="text-center text-red-500 text-4xl"> {days} </span>
				<span className="text-center text-red-500 text-4xl"> {months} </span>
				<span className="text-center text-red-500 text-4xl"> {years} </span>
			</div>
			;
		</div>
	);
};

export default Clock;
