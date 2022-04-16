import React, {useCallback, useState} from 'react';
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
    const [cards, setCards] = useState<Card[]>([]);

    const navigate = useNavigate();

    const handleLogOut = useCallback(() => {
        onLogOut();
        navigate('/login');
    }, []);

    const onAddClick = useCallback((card: Card) => {
        setCards((prevCards: Card[]) => {
                return [...prevCards, card]
            }
        );
    }, [cards]);

    const onDeleteClick = useCallback((id: number) => {
        setCards((prevCards: Card[]) => {
                return prevCards.filter((card: Card) => {
                    return card.id !== id;
                })
            }
        );
    }, [cards]);

    const onCardChange = useCallback(
        (card: Card) => {
            setCards((prevCards: Card[]) => {
                    return prevCards.map((c: Card) => {
                        if (c.id === card.id) {
                            return card;
                        } else {
                            return c;
                        }
                    })
                }
            );
        }
        , [cards]
    );

    return (
        <div className={styles.container}>
            <section className={styles.maker}>
                <Header user={user} onLogOut={handleLogOut}/>
                <main className={styles.contents}>
                    <Editor cards={cards} onAddClick={onAddClick} onDeleteClick={onDeleteClick}
                            onCardChange={onCardChange}/>
                    <Preview cards={cards}/>
                </main>
                <Footer/>
            </section>
        </div>
    )
};

export default Maker;