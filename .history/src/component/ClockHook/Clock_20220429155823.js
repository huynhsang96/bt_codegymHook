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

	console.log(years, months, days, hours, minutes, seconds);

	return (
		<div>
			<h1>
				{years}年{months}月{days}日{hours}時{minutes}分{seconds}秒
			</h1>
		</div>
	);
};

export default Clock;
