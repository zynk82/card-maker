import React, {SyntheticEvent, useCallback, useRef} from 'react';
import {Card} from "../../../../type/Types";
import styles from './card-form.module.css';
import UploadButton from "../upload-button/upload-button";

type CardFormProps = {
    onAddClick: (card: Card) => void;
}

const CardFormAdd = ({onAddClick}: CardFormProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const companyRef = useRef<HTMLInputElement>(null);
    const colorRef = useRef<HTMLSelectElement>(null);
    const jobRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const onAddDeleteClick = useCallback((e: SyntheticEvent) => {
            e.preventDefault();

            const card: Card =
                {
                    id: Date.now(),
                    name: nameRef.current!.value,
                    company: companyRef.current!.value,
                    color: colorRef.current!.value!,
                    job: jobRef.current!.value,
                    email: emailRef.current!.value,
                    message: messageRef.current!.value,
                };

            onAddClick(card);
            formRef.current!.reset();
        }
        , [onAddClick]);

    return (
        <li className={styles.li}>
            <form className={styles.form} ref={formRef}>
                <input className={styles.input} type="text" ref={nameRef} name='name'
                       placeholder='Name'/>
                <input className={styles.input} type="text" ref={companyRef} name='company'
                       placeholder='Company'/>
                <select className={styles.select} ref={colorRef} name='color'>
                    <option value="Dark">Dark</option>
                    <option value="Colorful">Colorful</option>
                    <option value="Light">Light</option>
                </select>
                <input className={styles.input} type="text" ref={jobRef} name='job'
                       placeholder='Title'/>
                <input className={styles.input} type="text" ref={emailRef} name='email'
                       placeholder='Email'/>
                <textarea className={styles.textarea} ref={messageRef} name='message'
                          placeholder='Message'/>
                <UploadButton fileName={undefined}/>
                <button className={`${styles.button} ${styles.add}`} onClick={onAddDeleteClick}>Add</button>
                {/*<button className={`${styles.button} ${styles.image}`}>Image</button>*/}
            </form>
        </li>
    );
};


export default CardFormAdd;