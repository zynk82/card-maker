import React from 'react';
import './App.css';
import {AuthService} from "./service/AuthService";
import Login from "./components/login/login";


function App() {
    const authService: AuthService = new AuthService();

    // authService.signIn('zynk82@naver.com', 'password');
    // authService.signUp('zynk82@naver.com', 'password');

    return (
        <div className="App">
            <Login/>
        </div>
    );
}

export default App;
