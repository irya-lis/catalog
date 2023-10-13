import React, { FC, useState } from 'react';
import styles from "../Home.module.css";
import { Link } from "react-router-dom";
import Price from "./Price";
import ReadMore from "../../../ui/ReadMore";
import Text from "./Text";
import { IIceCream } from "../../../../types/iceCream.interface";
import {useAuth} from "../../../../hooks/useAuth";

interface IIceCreamItemProps {
    iceCream: IIceCream;
    onDeleteIceCream: (id: number) => Promise<void>;
}

const IceCreamItem: FC<IIceCreamItemProps> = ({ iceCream, onDeleteIceCream }) => {
    const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);
    const { user } = useAuth(); // Получаем информацию о пользователе из хука аутентификации

    const handleReadMoreClick = () => {
        setIsReadMoreVisible(true);
    };

    const handleDeleteClick = () => {
        // Проверяем, авторизован ли пользователь
        if (user) {
            onDeleteIceCream(iceCream.id);
        } else {
            alert('Только авторизованные пользователи могут удалять мороженое.');
        }
    };

    return (
        <>
            <Text />
            <div key={iceCream.id} className={styles.item}>
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${iceCream.image})`,
                    }}>
                </div>

                <div className={styles.info}>
                    <h2>{iceCream.name}</h2>
                    <Price price={iceCream.price} />

                    {!isReadMoreVisible && (
                        <Link className='btn' to={`/iceCream/${iceCream.id}`} onClick={handleReadMoreClick}>
                            Read more
                        </Link>
                    )}

                    {user && (
                        <button className='btn' style={{ marginBottom: '10px' }} onClick={handleDeleteClick}>
                            Delete
                        </button>
                    )}

                    {isReadMoreVisible && <ReadMore />}
                </div>
            </div>
        </>
    );
}

export default IceCreamItem;
