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
					<span className="font-bold text-5xl text-fuchsia-400">{days}</span>
					<span className="font-bold text-2xl">Days</span>
				</li>
				<li className="flex flex-col justify-center text-center">
					<span className="font-bold text-5xl text-fuchsia-400">{months}</span>
					<span className="font-bold text-2xl">Months</span>
				</li>
				<li className="flex flex-col justify-center text-center">
					<span className="font-bold text-5xl text-fuchsia-400">{years}</span>
					<span className="font-bold text-2xl">Years</span>
				</li>
			</ul>
			<br></br>
			<ul className="flex flex-row gap-8 bg-slate-50 p-5 rounded-lg">
				<li className="flex flex-col justify-center text-center">
					<span className="font-bold text-5xl text-fuchsia-400">{hours}</span>
					<span className="font-bold text-2xl">Hours</span>
				</li>
			</ul>
		</div>
	);
};

export default Clock;
