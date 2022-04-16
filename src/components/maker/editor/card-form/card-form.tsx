import React, {SyntheticEvent, useState} from 'react';
import {Card} from "../../../../type/Types";
import styles from './card-form.module.css';

type CardFormProps = {
    card: Card;
    onDeleteClick: (id: number) => void;
    onCardChange: (card: Card) => void;
}

const CardForm = ({card, onCardChange, onDeleteClick}: CardFormProps) => {
    const [cardData, setCardData] = useState<Card>(card);

    const onDeleteClickListener = (e: SyntheticEvent) => {
        e.preventDefault();

        onDeleteClick(card.id!);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const targetName: string = e.target.name;
        const editedCardData: Card = {...cardData, [targetName]: e.target.value};

        setCardData(editedCardData);

        onCardChange(editedCardData);
    }

    return (
        <li className={styles.li}>
            <form className={styles.form}>
                <input className={styles.input} type="text" name='name' value={cardData.name} onChange={onChange}/>
                <input className={styles.input} type="text" name='company' value={cardData.company}
                       onChange={onChange}/>
                <select className={styles.select} name='color' value={cardData.color} onChange={onChange}>
                    <option value="Dark">Dark</option>
                    <option value="Colorful">Colorful</option>
                    <option value="Light">Light</option>
                </select>
                <input className={styles.input} type="text" name='job' value={cardData.job} onChange={onChange}/>
                <input className={styles.input} type="text" name='email' value={cardData.email} onChange={onChange}/>
                <textarea className={styles.textarea} name='message' value={cardData.message} onChange={onChange}/>
                <button className={`${styles.button} ${styles.delete}`} onClick={onDeleteClickListener}>Delete</button>
                <button className={`${styles.button} ${styles.image}`}>Image</button>
            </form>
        </li>
    );
};

export default CardForm;