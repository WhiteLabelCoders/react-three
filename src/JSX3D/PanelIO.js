import { useContext } from "react"
import Typer from "../effects/Typer"
// import { AnimationStateContext, SetAnimationStateContext, useAnimationState, useSetAnimationState } from "../providers/AnimationStateProvider"
import { animCcontext } from "../controllers/ComponentBinder"
import { CounterContext } from "../controllers/ComponentBinder"


const PanelIO = (props) => {
	const contextValue = useContext(CounterContext)


	let messages = [
		'Hello user',
		'This is you:',
		'<CameraControls />'
	]

	// const [, dispatch] = useContext(CounterContext);

	// useSetAnimationState(true)


	console.log()

	const message = () => {
		//context false
		(async () => {
			for (let i = 0; i < messages.length; i++) {
				if (i > 0) {
					await delay(3000)
				}
				props.setText(<Typer speed={100} msg={messages[i]} ></Typer>)
			}
		})();
	}

	const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

	return (
		<div className="panelIO-render js--panelIO">
			<div
				className="panel-start js--start"
				onClick={() => { message() }}>
				START
			</div>
		</div>
	);
}

export default PanelIO;
