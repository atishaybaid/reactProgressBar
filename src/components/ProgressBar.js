var React = require('react');


var ProgressBar = React.createClass({

render:function(){
	var stageList = this.props.stageList.map(function(item){
		return (
			<li className="stage">
				{item}
			</li>
			)
	})

	return (
			<ol className="progress-bar">
			{stageList}
			</ol>
		);
	}

})


module.exports = ProgressBar;
