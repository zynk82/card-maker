import React from 'react';
import styles from './preview.module.css';
import {Card} from "../../../type/Types";
import CardDetail from "./card/card-detail";

type PreviewProps = {
    cards: Card[];
}

const Preview = ({cards}: PreviewProps) => {
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Card Preview</h1>

            <ul className={styles.cards}>
                {
                    cards.map((card: Card) => {
                        return <CardDetail card={card}/>
                    })
                }
            </ul>
        </section>
    );
};

export default Preview;