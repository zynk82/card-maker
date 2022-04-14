import React, {useCallback} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './login.module.css';
import {User} from "../../type/Types";
import {useNavigate} from "react-router-dom";
import {AuthService} from "../../service/AuthService";

type LoginProps = {
    user: User | undefined;
    onLogIn: (user: User) => void;
    onLogOut: () => void;
}

const Login = ({user, onLogIn, onLogOut}: LoginProps) => {
    const navigate = useNavigate();

    const onGoogleClick = useCallback(() => {
        new AuthService().google().then((user) => {
                onLogIn(
                    {
                        name: '',
                        email: user!.email!,
                    }
                );

                navigate('/main');
            }
        );

        // onLogIn(
        //     {
        //         name: '',
        //         email: '',
        //     }
        // );
        //
        // navigate('/main');

        // new AuthService().signIn('', 'password')
        //     .then((user) => {
        //         onLogIn(
        //             {
        //                 name: '',
        //                 email: user!.email!,
        //             }
        //         );
        //
        //         navigate('/main');
        //     })


    }, []);

    const handleLogout = useCallback(() => {
        new AuthService().signOut().then(() => {
                onLogOut();
                navigate('/login');
            }
        );

        // onLogOut();
        // navigate('/login');

    }, []);

    return (
        <div className={styles.background}>
            <section className={styles.login}>
                <Header user={user} onLogOut={handleLogout}/>

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