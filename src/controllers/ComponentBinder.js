import Screen from "../objects/Screen";
import TerminalJSX from "../objects/TerminalJSX";
import { useState, createContext, useReducer } from "react";

export const animCcontext = createContext('false')

const reducer = (state, action) => {
	return state = !state
}

export const CounterContext = createContext(0);

const CounterContextProvider = ({ children }) => (
	<CounterContext.Provider value={useReducer(reducer, false)}>
		{children}
	</CounterContext.Provider>
);

const ComponentBinder = (props) => {

	const [txt, setTxt] = useState()

	return (
		<group className="wrapper" >
			<Screen txt={txt} setText={setTxt} />
			<TerminalJSX setText={setTxt} setIntensity={props.setIntensity} />
		</group>
	);
}

export default ComponentBinder;
