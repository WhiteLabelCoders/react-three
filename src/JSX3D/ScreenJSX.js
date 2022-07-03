import { useState } from "react";

const ScreenJSX = (props) => {

	return (
		<div className="screen-render js--screen">
			<h1>{props.txt}</h1>
		</div>

	);
}

export default ScreenJSX;
