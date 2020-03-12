import React, { useState, useContext } from 'react';
import Usercontext from './user-context';

export default function Post() {
    const methods = useContext(Usercontext);
    const [post, addPost] = useState(
        {
            title: "",
            body: ""
        }
    );
  
    console.log("methods");
    console.log(methods);


    function handleChange(evt) {

        console.log(evt)
        const value = evt.target.value;
        console.log(value);     
        addPost({
            ...post,
            [evt.target.name]: value
          });
        
      }

      function onSubmit(e) {
        e.preventDefault();
          console.log("in on submit")
         console.log(e);
         methods.onAddPost(post);
      }

    return (
        <React.Fragment>
            <div class="user-picy">

            </div>
            <div className="post-project-fields">

                <form onSubmit ={onSubmit} method="post">
                    <div class="row">
                        <div class="col-lg-12">

                            <label>
                                <input type="text" name="title" value={post.title} placeholder="Post Title" onChange={handleChange} />
                            </label>

                            <textarea name="body" value={post.body} onChange={handleChange}>
                                Enter your Post details here
                        </textarea>



                        </div>

                    </div>
                    <div class="post-st">
                        <button class="btn btn-primary" type="submit">Post</button>
                    </div>
                </form>
            </div>


        </React.Fragment>
    )


}
