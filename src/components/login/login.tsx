import React, {useCallback} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {AuthService} from "../../service/AuthService";

const Login = () => {
    const onGoogleClick = useCallback(() => {
            new AuthService().google();
        }
        , []);

    return (
        <section>
            <Header/>
            <h1>Login</h1>
            <ul>
                <li>
                    <button onClick={onGoogleClick}>Google</button>
                </li>
                <li>
                    <button>Github</button>
                </li>
            </ul>
            <Footer/>
        </section>
    );
};

export default Login;