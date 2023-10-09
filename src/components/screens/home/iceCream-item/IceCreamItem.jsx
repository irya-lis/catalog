import React, { useState } from 'react';
import styles from "../Home.module.css";
import { Link } from "react-router-dom";
import Price from "./Price";
import ReadMore from "../../../ui/ReadMore";

const IceCreamItem = ({ iceCream }) => {
    const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);

    const handleReadMoreClick = () => {
        setIsReadMoreVisible(true);
    };

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
                <Price price={iceCream.price} />

                {!isReadMoreVisible && (
                    <Link className='btn' to={`/iceCream/${iceCream.id}`} onClick={handleReadMoreClick}>
                        Read more
                    </Link>
                )}

                {isReadMoreVisible && <ReadMore />}
            </div>
        </div>
    );
}

export default IceCreamItem;
