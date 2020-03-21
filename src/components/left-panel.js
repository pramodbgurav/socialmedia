import React, { useContext } from 'react';
import Usercontext from "./Context";
// import {NavLink} from 'react-router-dom';


export default function Leftpanel ()
{
	const methods = useContext(Usercontext);

	return (
		<div className="col-lg-3 col-md-4 pd-left-none no-pd">
			<div className="main-left-sidebar no-margin">
				<div className="user-data full-width">
					<div className="user-profile">
						<div className="username-dt">
							<div className="usr-pic">
								<img src="images/user.png" alt="" />
							</div>
						</div>
						<div className="user-specs">
							<h3>Pramod Gurav</h3>
							<span>Developer</span>
						</div>
					</div>
					<ul className="user-fw-status">
						<li>
							<h4>Posts</h4>
							<span>{ methods.postCount }</span>
						</li>
						<li>
							<h4>Comments</h4>
							<span>{ methods.commentCount }</span>
						</li>
						<li>
							<a href="my-profile.html" title="">View Profile</a>
						</li>
					</ul>
				</div>

			</div>

		</div>
	)

}