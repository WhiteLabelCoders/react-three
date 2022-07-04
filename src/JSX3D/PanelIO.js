import { useEffect } from "react"
import Typer from "../effects/Typer"

const PanelIO = (props) => {

	// useEffect(() => {

	let messages = [
		'Hello user',
		'This is you:',
		'<CameraControls />'
	]
	let i = 0;

	const message = () => {
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
