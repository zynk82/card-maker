import React, {useCallback} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {AuthService} from "../../service/AuthService";
import styles from './login.module.css';

const Login = () => {
    const onGoogleClick = useCallback(() => {
            new AuthService().google();
        }
        , []);

    return (
        <div className={styles.background}>
            <section className={styles.login}>
                <Header/>

                <section className={styles.section}>
                    <h2 className={styles.h2}>Login</h2>
                    <ul className={styles.list}>
                        <li className={styles.list}>
                            <button className={styles.button} onClick={onGoogleClick}>Google</button>
                        </li>
                        <li className={styles.list}>
                            <button className={styles.button}>Github</button>
                        </li>
                    </ul>
                </section>

                <Footer/>
            </section>
        </div>
    );
};

export default Login;