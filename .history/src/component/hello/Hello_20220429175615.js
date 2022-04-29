import React, { useEffect, useState } from "react";

const Hello = () => {
	const [say, setSay] = useState("");
	// useEffect(() => {
	// 	const handleChange = (e) => {
	// 		setSay(e.target.value);
	// 	};
	// }, [say]);
	return (
		<div className="p-4 bg-white rounded-lg flex flex-col gap-2 max-w-[500px] overflow-hidden">
			<input
				className="p-2 border-2 border-solid border-blue-400 rounded-lg font-mono w-[500px] text-xl"
				value={say}
				onChange={(e) => setSay(e.target.value)}
			/>
			<div>
				<span className="text-2xl">Hello: </span>
				<span className="text-2xl">{say}</span>
			</div>
		</div>
	);
};

export default Hello;
