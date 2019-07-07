import React from 'react';
import GoalItem from  './GoalItem'
import AddGoal from  './AddGoal'

function GoalsApp() {
  var usePlusIcon = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-plus-icon"></use>'

  return (
  		<div className="row" >
			
  			<AddGoal/>
			<GoalItem/>
		</div>
  	);

}

export default GoalsApp;
