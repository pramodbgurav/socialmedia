import React, { useContext, useState } from 'react'
import UserContext from './Context'
export default function User ()
{

    let userObjectNew = {
        1: "Pramod Gurav",
        2: "Shivraj Sawant",
        3: "Anushree Nair",
        4: "Dhruv Diwidi",
        5: "Sandip Hirwale",

    }
    const [ newUser, setNewUser ] = useState({ id: "", name: "" });
    const { onFormSubmitUser } = useContext(UserContext);
    function onSubmit (e)
    {
        e.preventDefault();
        console.log("in on submit")
        console.log(e);
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
        <div className="body">
            <div className="container">
                <div className="row">
                    <div className="Absolute-Center is-Responsive">
                        <div id="logo-container"></div>
                        <div className="col-sm-12 col-md-10 col-md-offset-1">
                            <form onSubmit={ onSubmit } id="loginForm" method="post">
                                <div className="form-group input-group">
                                    <label>Choose User:</label>
                                    <select type="combobox" id="user" onChange={ handleChange }>
                                        <option value="0">Select User</option>
                                        <option value="1">Pramod</option>
                                        <option value="2">Shivraj</option>
                                        <option value="3">Anushree</option>
                                        <option value="4">Dhruv</option>
                                        <option value="5">Sandip</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-def btn-block">Set User</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}