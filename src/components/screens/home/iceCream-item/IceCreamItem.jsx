import React from 'react';
import styles from "../Home.module.css";

const IceCreamItem = ({iceCream}) => {
    return (
        <div key={iceCream.id} className={styles.item}>

            <div
                className={styles.image}
                style={{
                    backgroundImage: `url(${iceCream.image})`,
                }}>
            </div>

            <div className={styles.info}>
                <h2>{iceCream.name}</h2>
                <p>
                    {new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(iceCream.price)}
                </p>
                <button>Read more</button>
            </div>

        </div>
    )
}

export default IceCreamItem;