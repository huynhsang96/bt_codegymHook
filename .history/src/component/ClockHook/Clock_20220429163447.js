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
		<div className="p-5 w-full h-full mx-auto">
			<ul className="flex flex-row gap-8 bg-slate-50 p-5 rounded-lg">
				<li className="flex flex-col justify-center text-center">
					<span className="font-bold text-5xl">{days}</span>
					<span className="font-bold text-5xl">Days</span>
				</li>
				<li className="flex flex-col justify-center text-center">
					<span className="font-bold text-5xl">{years}</span>
					<span className="font-bold text-5xl">Year</span>
				</li>
				<li className="flex flex-col justify-center text-center">
					<span className="font-bold text-5xl">{years}</span>
					<span className="font-bold text-5xl">Year</span>
				</li>
			</ul>
		</div>
	);
};

export default Clock;
