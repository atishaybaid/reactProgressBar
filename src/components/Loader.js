var React = require('react');
var ProgressBar = require('./ProgressBar');


var Loader = React.createClass({
	render:function(){
		var currentStage = 4;
		var stageList = [1,2,3,4,5,6];
		return(
			<div className="loader">
				<ProgressBar stageList={stageList} currentStage={currentStage} />	
			</div>
			)
	}
});



module.exports = Loader;