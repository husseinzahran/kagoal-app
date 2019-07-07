import React from 'react';

function AddGoal() {
    var usePlusIcon = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-plus-icon"></use>'

	return(

			<div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
				
				
				
				<div className="friend-item friend-groups create-group" data-mh="friend-groups-item">
				
					<a href="#" className="  full-block" data-toggle="modal" data-target="#create-friend-group-1"></a>
					<div className="content">
				
						<a href="#" className="  btn btn-control bg-blue" data-toggle="modal" data-target="#create-friend-group-1">
							<svg className="olymp-plus-icon" dangerouslySetInnerHTML={{__html: usePlusIcon }} />
						</a>
				
						<div className="author-content">
							<a href="#" className="h5 author-name">My Family</a>
							<div className="country">6 Friends in the Group</div>
						</div>
				
					</div>
				
				</div>
			
			</div>

		);

}

export default AddGoal;