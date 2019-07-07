import React from 'react';

function GoalItem() {
  var useThreeDot = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>'
  var useHappyFace = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-faces-icon"></use>'
  var useSettingsIcon = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-settings-icon"></use>'
	return(
			<div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
				<div className="ui-block" data-mh="friend-groups-item">
				
					
					<div className="friend-item friend-groups">
					
						<div className="friend-item-content">
					
							<div className="more">
								<svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: useThreeDot }} />
								<ul className="more-dropdown">
									<li>
										<a href="#">Report Profile</a>
									</li>
									<li>
										<a href="#">Block Profile</a>
									</li>
									<li>
										<a href="#">Turn Off Notifications</a>
									</li>
								</ul>
							</div>
							<div className="friend-avatar">
								<div className="author-thumb">
									<img src="img/logo.png" alt="Olympus" />
								</div>
								<div className="author-content">
									<a href="#" className="h5 author-name">My Family</a>
									<div className="country">6 Friends in the Group</div>
								</div>
							</div>
					
							<ul className="friends-harmonic">
								<li>
									<a href="#">
										<img src="img/friend-harmonic5.jpg" alt="friend" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src="img/friend-harmonic10.jpg" alt="friend" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src="img/friend-harmonic7.jpg" alt="friend" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src="img/friend-harmonic8.jpg" alt="friend" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src="img/friend-harmonic2.jpg" alt="friend" />
									</a>
								</li>
								<li>
									<a href="#">
										<img src="img/avatar30-sm.jpg" alt="author" />
									</a>
								</li>
							</ul>
					
					
							<div className="control-block-button">
								<a href="#" className="  btn btn-control bg-blue" data-toggle="modal" data-target="#create-friend-group-add-friends">
									<svg className="olymp-happy-faces-icon"  dangerouslySetInnerHTML={{__html: useHappyFace }} />
								</a>
					
								<a href="#" className="btn btn-control btn-grey-lighter">
									<svg className="olymp-settings-icon" dangerouslySetInnerHTML={{__html: useSettingsIcon }} />
								</a>
					
							</div>
						</div>
					</div>
				
				</div>
			</div>
		);

}

export default GoalItem;
