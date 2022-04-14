import React, {useCallback} from 'react';
import Header from "../header/header";
import styles from './maker.module.css';
import Footer from "../footer/footer";
import {User} from "../../type/Types";
import {useNavigate} from "react-router-dom";

type MakerProps = {
    user: User | undefined;
    onLogOut: () => void;
}

const Maker = ({user, onLogOut}: MakerProps) => {
    const navigate = useNavigate();

    const handleLogOut = useCallback(() => {
        onLogOut();
        navigate('/login');
    }, []);

    return (
        <section className={styles.maker}>
            <Header user={user} onLogOut={handleLogOut}/>
            <main className={styles.contents}>
                <h1>main</h1>
            </main>
            <Footer/>
        </section>
    )
};

export default Maker;