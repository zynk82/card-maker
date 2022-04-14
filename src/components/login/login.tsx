import React, {useCallback, useEffect} from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './login.module.css';
import {User} from "../../type/Types";
import {useLocation, useNavigate} from "react-router-dom";
import {AuthService} from "../../service/AuthService";

type LoginProps = {
    user: User | undefined;
    onLogIn: (user: User) => void;
    onLogOut: () => void;
}

const Login = ({user, onLogIn, onLogOut}: LoginProps) => {
    const navigate = useNavigate();
    const {state: routeState} = useLocation();

    useEffect(() => {
        const authService: AuthService = AuthService.getInstance();
        authService.onAuthChanged(onAuthChanged);
    });

    const goMaker = (user: User) => {
        navigate('/maker', {
            state: user.uid,
        });
    }

    const onAuthChanged = (user: any) => {
        if (user) {
            const uid = user!.uid!;

            let newUser: User = {
                name: '',
                email: user!.email!,
                uid: uid,
            };

            onLogIn(newUser);

            goMaker(newUser);

        } else {
            navigate('/login', {});

        }
    }

    const onGoogleClick = useCallback(() => {
        const authService: AuthService = AuthService.getInstance();
        authService.onAuthChanged(onAuthChanged);
        authService.google().then((user) => {
            //
            //     const uid = user!.uid!;
            //     onLogIn(
            //         {
            //             name: '',
            //             email: user!.email!,
            //             uid: uid,
            //         }
            //     );
            //
            //     navigate('/maker', {
            //         state: uid,
            //     });
            // }
        });

        // onLogIn(
        //     {
        //         name: '',
        //         email: '',
        //     }
        // );
        //
        // navigate('/maker');

        // new AuthService().signIn('', 'password')
        //     .then((user) => {
        //         onLogIn(
        //             {
        //                 name: '',
        //                 email: user!.email!,
        //             }
        //         );
        //
        //         navigate('/maker');
        //     })


    }, []);

    const handleLogout = useCallback(() => {
        AuthService.getInstance().signOut().then(() => {
                onLogOut();
                navigate('/login');
            }
        );

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