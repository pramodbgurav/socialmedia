import React, { useState } from 'react';



export default function Comment ({ comment })
{
    return (
        <div >
            <div class="job_descp">

                <p> *{ comment.body }</p>
            </div>

        </div >

    )

}

