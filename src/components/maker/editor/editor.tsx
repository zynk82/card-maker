import React from 'react';
import styles from './editor.module.css';
import {Card} from "../../../type/Types";
import CardForm from "./card-form/card-form";

type EditorProps = {
    cards: Card[];
}

const Editor = ({cards}: EditorProps) => {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul>
                {
                    cards.map((card: Card) => {
                        return <CardForm card={card}/>;
                    })
                }
            </ul>
        </section>
    );
};

export default Editor;