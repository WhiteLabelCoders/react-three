import Screen from "../objects/Screen";
import TerminalJSX from "../objects/TerminalJSX";
import { useState, createContext } from "react";

const ComponentBinder = () => {

	const EntryContext = createContext()

	const [txt, setTxt] = useState('')

	return (
		<group className="wrapper" >
			<EntryContext.Provider value={txt}>
				<Screen txt={txt} setText={setTxt} />
				<TerminalJSX setText={setTxt} />
			</EntryContext.Provider>
		</group>
	);
}

export default ComponentBinder;
