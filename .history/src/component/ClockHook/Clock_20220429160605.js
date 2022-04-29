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
				<h1 className="text-center text-white text-4xl"> 123 </h1>
			</div>
			;
		</div>
	);
};

export default Clock;
