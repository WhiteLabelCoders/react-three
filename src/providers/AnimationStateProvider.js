import { createContext, useContext, useState } from "react";

export const AnimationStateContext = createContext()
export const SetAnimationStateContext = createContext()

export function useAnimationState() {
	return useContext(AnimationStateContext)
}


export function useSetAnimationState() {
	return useContext(SetAnimationStateContext)
}
 
export default function AnimationStateProvider({ children }) {

	const [animationState, setAnimationState] = useState(false)

	function toggleAnimationState() {
		setAnimationState(animationState => !animationState)
	}

	return (
		<AnimationStateContext.Provider value={animationState}>
			<SetAnimationStateContext.Provider value={toggleAnimationState}>
				{children}
			</SetAnimationStateContext.Provider>
		</AnimationStateContext.Provider>
	);
}
