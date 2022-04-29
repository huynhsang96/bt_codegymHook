import React, { useEffect, useState } from "react";
import useClock from "../../Hooks/useClock";

const Clock = () => {
	// const [now, setNow] = useState(new Date());
	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		setNow(new Date());
	// 	}, 1000);
	// 	return () => clearInterval(timer);
	// }, [now]);
	// const years = now.getFullYear();
	// const months = now.getMonth() + 1;
	// const days = now.getDate();
	// const hours = now.getHours();
	// const minutes = now.getMinutes();
	// const seconds = now.getSeconds();
	// console.log(seconds < 10 ? "0" + seconds : seconds);

	const { years, months, days, hours, minutes, seconds } = useClock();

	return (
		<div className="p-5 w-full h-full mx-auto">
			<ul className="flex min-w-[400px] flex-row justify-between bg-slate-50 p-5 rounded-lg">
				<GetDataBase data={days} base="Days"></GetDataBase>
				<GetDataBase data={months} base="Months"></GetDataBase>
				<GetDataBase data={years} base="Years"></GetDataBase>
			</ul>
			<br></br>
			<ul className="flex flex-row justify-between bg-slate-50 p-5 rounded-lg">
				<GetDataBase data={hours} base="Hours"></GetDataBase>
				<GetDataBase data={minutes} base="Minutes"></GetDataBase>
				<GetDataBase data={seconds} base="Seconds"></GetDataBase>
			</ul>
		</div>
	);
};

const GetDataBase = (props) => {
	return (
		<li className="flex flex-col justify-center text-center">
			<span className="font-bold text-5xl text-fuchsia-400">{props.data}</span>
			<span className="font-bold text-2xl">{props.base}</span>
		</li>
	);
};

export default Clock;
