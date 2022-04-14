import React from 'react';
import {Card} from "../../../../type/Types";
import styles from './card-form.module.css';

type CardFormProps = {
    card: Card;
}

const CardForm = ({card}: CardFormProps) => {
    return (
        <li className={styles.li}>
            <form className={styles.form}>
                <input className={styles.input} type="text" name='name' value={card.name}/>
                <input className={styles.input} type="text" name='company' value={card.company}/>
                <select className={styles.select} name='color' value={card.color}>
                    <option value="Dark">Dark</option>
                    <option value="Colorful">Colorful</option>
                    <option value="Light">Light</option>
                </select>
                <input className={styles.input} type="text" name='job' value={card.job}/>
                <input className={styles.input} type="text" name='email' value={card.email}/>
                <textarea className={styles.textarea} name='message' value={card.message}/>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                <button className={`${styles.button} ${styles.image}`}>Image</button>
            </form>
        </li>
    );
};


export default CardForm;