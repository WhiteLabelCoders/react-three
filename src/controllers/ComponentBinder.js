import Screen from "../objects/Screen";
import TerminalJSX from "../objects/TerminalJSX";
import { useState } from "react";

const ComponentBinder = () => {

	const [txt, setTxt] = useState('Elo2')

	return (
		<group className="wrapper" >
			<Screen txt={txt} />
			<TerminalJSX setText={setTxt} />
		</group>
	);
}

export default ComponentBinder;
