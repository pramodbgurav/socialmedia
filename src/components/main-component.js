import React from 'react';
// import {NavLink} from 'react-router-dom';

import Leftpanel from './left-panel';
import Centerpanel from './center-panel';
import Rightpanel from './right-panel';

export default function Maincomponent({allPosts}){
  
    return (
        <div className="main-section">
            <div className="container">
                <div className ="main-section-data">
                    <div className="row">
                        <Leftpanel></Leftpanel>
                        <Centerpanel allPosts={allPosts}></Centerpanel>
                        <Rightpanel></Rightpanel>
                    </div>

                </div>
            </div>
        </div>
    )
}