import React, {useCallback} from 'react';
import styles from './header.module.css';
import {AuthService} from "../../service/AuthService";
import {User} from "../../type/Types";

type HeaderProps = {
    user: User | undefined;
    onLogOut: () => void;
}

const Header = ({user, onLogOut}: HeaderProps) => {
    const onLogOutClick = useCallback(() => {
        AuthService.getInstance().signOut().then(() => {
            onLogOut();
        });
    }, []);

    return (
        <div>
            <header className={styles.header}>
                {
                    user &&
                    <button className={styles.logout} onClick={onLogOutClick}>Logout</button>
                }
                <img src='/images/logo.png' alt='logo'/>
                <h1>Business Card Maker</h1>
            </header>
        </div>
    );
};

export default Header;