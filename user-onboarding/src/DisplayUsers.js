import React from "react";


function DisplayUsers(props) {
    console.log(props);
    return (
        <div>
            <h2>{`${props.form.name} just signed up!`}</h2>
        </div>
    );
}

export default DisplayUsers;