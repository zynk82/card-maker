import React from 'react';
import './app.module.css';
import {AuthService} from "./service/AuthService";
import Login from "./components/login/login";
import styles from './app.module.css';

function App() {
    const authService: AuthService = new AuthService();

    // authService.signIn('zynk82@naver.com', 'password');
    // authService.signUp('zynk82@naver.com', 'password');

    return (
        <div className={styles.app}>
            <Login/>
        </div>
    );
}

export default App;
