var React = require('react');
var classNames = require('classnames');


var ProgressBar = React.createClass({

render:function(){
	var currentStage = this.props.currentStage;
	var stageList = this.props.stageList.map(function(item){
		return (
			<li className="stage" key={item} >
				<div  ref={"stage_" +item}  className={classNames("checkpoint",{glow:item <= currentStage})}></div>
				<div className={classNames("inner-progress",{active:item <= currentStage})}></div>
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
