import { useEffect } from "react";

const PanelIO = (props) => {

	// useEffect(() => {

	let messages = [
		'Hello user',
		'This is you: \n <CameraControls />',
		'Twoja Stara'
	]
	let i = 0;

	const message = () => {
		(async () => {
			for (let i = 0; i < messages.length; i++) {
				// Wait to do this one until a delay after the last one
				if (i > 0) {
					await delay(4000); // 5000 for five seconds
				}
				props.setText(messages[i])
			}
		})();
	}

	const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

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
