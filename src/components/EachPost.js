import React, { useState } from 'react';
import Post from './post';
import AllComments from './allComments';
// import { NavLink } from 'react-router-dom';


export default function EachPost({ post }) {
    const [comment, showComments] = useState(false);

    const displayComments = () => {
        if (comment) {
            return <AllComments />
        }
    }
    const setComment = () => {
        showComments(!comment)
    }
    return (
        <div class="post-bar">
            <div class="post_topbar">
                <div class="usy-dt">
                    <img src="images/resources/us-pic.png" alt="" />
                    <div class="usy-name">
                        <h3>{post.title}</h3>
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
                <p>{post.body}</p>
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


                    <label class="fas fa-comment-alt" onClick={() => { setComment() }}>Comments</label>

                </ul>
            </div>
            <div>
                {displayComments}
            </div>
        </div >

    )

}

