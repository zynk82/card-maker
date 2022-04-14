import React from 'react';
import {Card} from "../../../../type/Types";
import styles from './card-detail.module.css';

type CardProps = {
    card: Card;
}

const CardDetail = ({card}: CardProps) => {
    const IMAGE_URL = card.fileURL || '/images/default_logo.png';
    let CARD_COLOR = '';

    const color = card.color;

    if (color === "Colorful") {
        CARD_COLOR = styles.bg_colorful;

    } else if (color === "Dark") {
        CARD_COLOR = styles.bg_dark;

    } else if (color === "Light") {
        CARD_COLOR = styles.bg_light;

    } else {
        CARD_COLOR = styles.bg_dark;

    }

    return (
        <li className={`${styles.container} ${CARD_COLOR}`}>
            {/*<img src='https://cdn.mindgil.com/news/photo/202107/71871_9350_942.png' className={styles.pic}/>*/}
            <img src={IMAGE_URL} className={styles.pic}/>

            <section className={styles.profile}>
                <h3 className={styles.name}>{card.name}</h3>
                <h4 className={styles.company}>{card.company}</h4>
                {/*<hr className={styles.hr}/>*/}
                <p className={styles.job}>{card.job}</p>
                <p className={styles.email}>{card.email}</p>
                <p className={styles.message}>{card.message}</p>
            </section>
        </li>
    );
};

export default CardDetail;