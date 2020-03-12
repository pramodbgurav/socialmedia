import React from 'react';
// import {NavLink} from 'react-router-dom';
 
 
export default function Leftpanel(){
	 
	 
return(
    <div className="col-lg-3 col-md-4 pd-left-none no-pd">        
        <div className="main-left-sidebar no-margin">
									<div className="user-data full-width">
										<div className="user-profile">
											<div className="username-dt">
												<div className="usr-pic">
													<img src="images/user.png" alt=""/>
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
												<span>34</span>
											</li>
											<li>
												<h4>Comments</h4>
												<span>155</span>
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