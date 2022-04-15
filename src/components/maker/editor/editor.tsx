import React from 'react';
import styles from './editor.module.css';
import {Card} from "../../../type/Types";
import CardForm from "./card-form/card-form";
import CardFormAdd from "./card-form/card-form-add";

type EditorProps = {
    cards: Card[];
    onAddClick: (card: Card) => void;
    onDeleteClick: (id: number) => void;
}

const Editor = ({cards, onAddClick, onDeleteClick}: EditorProps) => {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul>
                {
                    cards.map((card: Card) => {
                        if (card.id) {
                            return <CardForm card={card} onDeleteClick={onDeleteClick}/>;
                        }
                    })
                }

                <CardFormAdd onAddClick={onAddClick}/>
            </ul>
        </section>
    );
};

export default Editor;