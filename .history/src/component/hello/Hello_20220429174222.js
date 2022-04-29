import React, { useEffect, useState } from "react";

const Hello = () => {
	const [say, setSay] = useState("");
	useEffect(() => {}, []);
	return (
		<div className="p-4 bg-white rounded-lg flex flex-col gap-2">
			<input className="p-2 border-2 border-solid border-blue-400 rounded-lg font-mono w-[400px] text-xl" />
			<div>
				<span className="text-2xl">Hello:</span>
				<span className="text-2xl">Hello</span>
			</div>
		</div>
	);
};

export default Hello;
