import Typer from "../effects/Typer"


const PanelIO = (props) => {

	let messages = [
		'Hello user',
		'This is you:',
		'<CameraControls />',
		'You are a part of...',
		'...a more complex code.',
		'Feel free to browse this...',
		'...simple React + 3D project'
	]

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
				onClick={() => {
					message()
					props.setIntensity(1)
				}} >
				START
			</div>
		</div>
	);
}

export default PanelIO;
