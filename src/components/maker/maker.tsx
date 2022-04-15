import React, {useCallback, useEffect, useState} from 'react';
import Header from "../header/header";
import styles from './maker.module.css';
import Footer from "../footer/footer";
import {Card, User} from "../../type/Types";
import {useNavigate} from "react-router-dom";
import Editor from "./editor/editor";
import Preview from "./preview/preview";

type MakerProps = {
    user: User | undefined;
    onLogOut: () => void;
}

const Maker = ({user, onLogOut}: MakerProps) => {
    const [cards, setCards] = useState<Card[]>([
        // {id: 1, name: '박수신', company: '비정규직', color: "Dark", job: '공돌이', email: 'aaa@aaa.aaa', message: '박수신입니다.'},
        // {id: 2, name: '신주희', company: '머드라', color: "Colorful", job: '공순이', email: 'bbb@bbb.bbb', message: '신주희입니다.'},
        // {id: 3, name: '모란', company: '', color: "Light", job: '백수', email: 'ccc@ccc.ccc', message: '토끼입니다.'},
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        // let blankExist = cards.some((card: Card) => {
        //     return !card.id;
        // });
        //
        // if (!blankExist) {
        //     setCards([
        //         ...cards
        //         , {id: undefined, name: '', company: '', color: "Dark", job: '', email: '', message: ''}
        //     ]);
        // }
    }, cards);

    const handleLogOut = useCallback(() => {
        onLogOut();
        navigate('/login');
    }, []);

    const onAddClick = useCallback((card: Card) => {
        setCards([...cards, card]);
    }, [cards]);

    const onDeleteClick = useCallback((id: number) => {
        setCards(
            cards.filter((card: Card) => {
                return card.id !== id;
            }));
    }, [cards]);

    return (
        <div className={styles.container}>
            <section className={styles.maker}>
                <Header user={user} onLogOut={handleLogOut}/>
                <main className={styles.contents}>
                    <Editor cards={cards} onAddClick={onAddClick} onDeleteClick={onDeleteClick}/>
                    <Preview cards={cards}/>
                </main>
                <Footer/>
            </section>
        </div>
    )
};

export default Maker;