import Screen from "../objects/Screen";
import TerminalJSX from "../objects/TerminalJSX";
import { useState, createContext, useReducer } from "react";
import AnimationStateProvider from "../providers/AnimationStateProvider";

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

const ComponentBinder = () => {

	const [txt, setTxt] = useState()

	return (
		<group className="wrapper" >
			<CounterContextProvider>
				{/* <animCcontext.Provider value={'true'}> */}
				<Screen txt={txt} setText={setTxt} />
				<TerminalJSX setText={setTxt} />
				{/* </animCcontext.Provider> */}
			</CounterContextProvider>
		</group>
	);
}

export default ComponentBinder;
