import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Post() {

 function onSubmit(e){
    e.preventDefault();
    console.log("in on submit");
}

function handleChange(){
    
}
    
    return (
        <React.Fragment>


            <div className="post-project-fields">
                {/* <div class="user-picy">
                <img src="images/user.png" alt="" />
            </div> */}
                <form onSubmit={onSubmit}>
                    <div class="row">
                        <div class="col-lg-12">

                            <label>
                              <input type="text" value="" onChange={this.handleChange} />
                             
                            </label>


                            <textarea>
                                Enter your Post details here
                        </textarea>

                        </div>
                    </div>
                </form>
            </div>

            <div class="post-st">
                <button class="btn btn-primary">Post</button>

            </div>

        </React.Fragment>
    )


}
