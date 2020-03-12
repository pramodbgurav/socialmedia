import React from 'react';
import Post from './post';
// import { NavLink } from 'react-router-dom';


export default function AllPosts({allPosts}) {
    return (
        allPosts.map(post => {
            return (


                <div class="post-bar">
                <div class="post_topbar">
                    <div class="usy-dt">
                        <img src="images/resources/us-pic.png" alt="" />
                        <div class="usy-name">
            <h3>{post.userId}</h3>
                            <span><img src="images/clock.png" alt="" />3 min ago</span>
                        </div>
                    </div>
                   
                </div>
                <div class="epi-sec">
                    <ul class="descp">
                        <li><img src="images/icon8.png" alt="" /><span>Developer</span></li>
                        <li><img src="images/icon9.png" alt="" /><span>India</span></li>
                    </ul>
                    
                </div>
                <div class="job_descp">
                    <p>{post.title}</p>
                    <ul class="skill-tags">
                        <li><a href="#" title="">HTML</a></li>
                        <li><a href="#" title="">PHP</a></li>
                        <li><a href="#" title="">CSS</a></li>
                        <li><a href="#" title="">Javascript</a></li>
                        <li><a href="#" title="">Wordpress</a></li>
                    </ul>
                </div>
                <div class="job-status-bar">
                    <ul class="like-com">                
                        <li><a href="#" class="com"><i class="fas fa-comment-alt"></i> Comment 15</a></li>
                    </ul>                 
                </div>
            </div>

            )
        }) 


    )

}