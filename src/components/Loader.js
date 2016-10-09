var React = require('react');
var ProgressBar = require('./ProgressBar');


var Loader = React.createClass({
	getInitialState: function() {
		return {
			currentStage:0 
		};
	},
	render:function(){
		//evar currentStage = 4;
		var stageList = [1,2,3,4,5,6];
		return(
			<div className="loader">
				<ProgressBar stageList={stageList} currentStage={this.state.currentStage} />
				<input type="button" onClick={this.nextStage} value="Next"/>
			</div>
			)

	},
	nextStage:function(){
		var nextStage = this.state.currentStage +1; 
		this.setState({
			currentStage:nextStage
		});

	}



});



module.exports = Loader;