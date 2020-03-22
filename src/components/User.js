import React, { useContext, useState } from 'react'
import UserContext from './Context'
export default function User ()
{

    let userObjectNew = {
        1: "Pramod Gurav",
        2: "Shivraj Sawant",
        3: "Anushree Nair",
        4: "Dhruv Dwivedi",
        5: "Sandip Hirwale",

    }

    const [ newUser, setNewUser ] = useState({ id: "", name: "" });
    const { onFormSubmitUser } = useContext(UserContext);
    function onSubmit (e)
    {
        e.preventDefault();
        onFormSubmitUser(newUser)
    }
    function handleChange (evt)
    {
        const id = evt.target.value;
        setNewUser({
            name: userObjectNew[ id ],
            id: id
        });

    }
    return (
        <React.Fragment>
            <div class="user-picy">

            </div>
            <div className="post-project-fields">

                <form onSubmit={ onSubmit } id="loginForm" method="post">
                    <div class="row">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">

                            <label>
                                <label>Choose User:</label>
                            </label>

                            <select onChange={ handleChange }>
                                <option value="0">Select User</option>
                                <option value="1">Pramod</option>
                                <option value="2">Shivraj</option>
                                <option value="3">Anushree</option>
                                <option value="4">Dhruv</option>
                                <option value="5">Sandip</option>
                            </select>




                        </div>

                    </div>
                    <div class="post-st">
                        <button class="btn btn-primary" type="submit">set User</button>
                    </div>
                </form>
            </div>


        </React.Fragment>
    )
}