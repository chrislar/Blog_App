import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import "../Style/Logout.css";

function Logout() {

    const [loggedOut, setLoggedOut] = useState(false)

    function handleLogout() {
        setLoggedOut(true)

    };

    if (loggedOut) {
        return <Redirect to="/" push={true} />

    }


    return (
        <div className="Out">
        <button type="submit" onClick={handleLogout} className="btn btn-block btn-success">Logout</button>
        </div>

    )
}
export default Logout;