import React, { ChangeEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import styles from './Header.module.css';

const Header = () => {
    const { user, setUser } = useAuth();
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (loginData.username === 'SweetTooth' && loginData.password === 'iryaLis') {
            setUser({ name: 'SweetTooth' });
            setErrorMessage('');
        } else {
            setErrorMessage('Неверные учетные данные. Попробуйте снова.');
        }
    };

    const handleLogout = () => {
        setUser(null);
    };

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, username: e.target.value });
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, password: e.target.value });
    };

    return (
        <div className={styles.login}>
            {user ? (
                <>
                    <h4>Добро пожаловать, {user.name}!</h4>
                    <button className='btn' onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <form className={styles.form} onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Login"
                            value={loginData.username}
                            onChange={handleUsernameChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={handlePasswordChange}
                        />
                        <button type="submit" className='btn'>Login</button>
                    </form>
                </>
            )}
            <div className={styles.errorMessageContainer}>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            </div>
        </div>
    );
}

export default Header;
