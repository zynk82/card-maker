import React, {useCallback} from 'react';
import Header from "../header/header";
import styles from './maker.module.css';
import Footer from "../footer/footer";
import {User} from "../../type/Types";
import {useNavigate} from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

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
        <div className={styles.container}>
            <section className={styles.maker}>
                <Header user={user} onLogOut={handleLogOut}/>
                <main className={styles.contents}>
                    <Editor/>
                    <Preview/>
                </main>
                <Footer/>
            </section>
        </div>
    )
};

export default Maker;