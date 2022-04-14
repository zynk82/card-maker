import React, {useCallback, useState} from 'react';
import './app.module.css';
import Login from "./components/login/login";
import styles from './app.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Maker from "./components/maker/maker";
import {User} from "./type/Types";

function App() {
    const [user, setUser] = useState<User | undefined>();

    const handleLogout = useCallback(() => {
        setUser(undefined);
    }, []);


    const handleLogin = useCallback((user: User) => {
        setUser(user);
    }, []);

    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login onLogIn={handleLogin} onLogOut={handleLogout} user={user}/>}/>
                    <Route path='/maker' element={<Maker user={user} onLogOut={handleLogout}/>}/>
                    <Route path='/' element={<Login onLogIn={handleLogin} onLogOut={handleLogout} user={user}/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
