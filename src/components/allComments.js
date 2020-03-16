import React, { useState } from 'react'
export default function AllComments() {


    const [comment, addComment] = useState(
        {
            body: ""
        }
    );
    function handleChange(evt) {

        const value = evt.target.value;
        addComment({
            ...comment,
            [evt.target.name]: value
        });

        return (
            <div>
                <textarea name="body" value={comment.body} onChange={handleChange}>

                </textarea>
            </div>
        )

    }
}