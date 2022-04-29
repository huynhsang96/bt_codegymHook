import { useEffect, useState } from "react";

export default function useClock() {
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
	return {
		years,
		months: months < 10 ? "0" + months : months,
		days: days < 10 ? "0" + days : days,
		hours: hours < 10 ? "0" + hours : hours,
		minutes: minutes < 10 ? "0" + minutes : minutes,
		seconds: seconds < 10 ? "0" + seconds : seconds,
	};
}
