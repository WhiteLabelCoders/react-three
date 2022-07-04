import { useState, useRef, useEffect } from "react";

const ScreenJSX = (props) => {

	const ref = useRef()

	return (
		<div className="screen-render js--screen">
			<h1 ref={ref}>{props.txt}</h1>
		</div>
	);
}

export default ScreenJSX;
