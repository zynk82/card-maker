import React from 'react';
import styles from './header.module.css';

type HeaderProps = {
    onLogout?: () => void;
}

const Header = ({onLogout}: HeaderProps) => {
    return (
        <div>
            <header className={styles.header}>
                {
                    onLogout &&
                    <button onClick={onLogout}>Logout</button>
                }
                <img src='/images/logo.png' alt='logo'/>
                <h1>Business Card Maker</h1>
            </header>
        </div>
    );
};

export default Header;