import React, { useContext } from 'react';

import UserContext from './Context';
import EachComment from './Comment'




export default function AllComments ({ postId })
{
    const { comments } = useContext(UserContext);

    let vComments = comments.filter((comment) =>
    {
        return comment.postId == postId;
    })

    return (
        vComments.map(c =>
        {
            return (
                < EachComment comment={ c } />

            )
        })


    )

}