import React, {useCallback} from 'react';
import Header from "../header/header";
import styles from './main.module.css';
import Footer from "../footer/footer";
import {User} from "../../type/Types";
import {useNavigate} from "react-router-dom";

type MainProps = {
    user: User | undefined;
    onLogOut: () => void;
}

const Main = ({user, onLogOut}: MainProps) => {
    const navigate = useNavigate();

    const handleLogOut = useCallback(() => {
        onLogOut();
        navigate('/login');
    }, []);

    return (
        <div className={styles.main}>
            <Header user={user} onLogOut={handleLogOut}/>
            <main className={styles.contents}>
                <h1>main</h1>
            </main>
            <Footer/>
        </div>
    )
};

export default Main;