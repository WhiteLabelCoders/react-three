const PanelIO = (props) => {

	return (
		<div className="panelIO-render js--panelIO">
			<div
				className="panel-start js--start"
				onClick={() => props.setText('Elo3')}>

			</div>
		</div>
	);
}

export default PanelIO;
