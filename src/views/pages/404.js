import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from "reactstrap";

const ErrorPage = () => {
    return (
        <div>
            <div className="m-t-xxl text-center">
                <h1 className="error-number">404</h1>
                <h3 className="m-b">Sorry but we couldn't find this page.<br/>It either got lost in the webs or doesn't exist!</h3>
                <NavLink to={'/home'}><Button color="danger">Ohh. Take me home please!</Button></NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;
