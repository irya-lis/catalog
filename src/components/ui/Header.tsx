import React from "react";
import { useAuth } from "../../hooks/useAuth";
import styles from './Header.module.css';

const Header = () => {
    const { user, setUser } = useAuth();

    return (
        <div className={styles.login}>
            {user ? (
                <>
                    <h4>Welcome, {user.name}!</h4>
                    <button className='btn' onClick={() => setUser(null)}>Logout</button>
                </>
            ) : (
                <button className='btn' onClick={() => setUser({ name: 'Sweet tooth' })}>Login</button>
            )}
        </div>
    );
}

export default Header;
