import IceCreamItem from "../screens/home/iceCream-item/IceCreamItem";
import React from "react";

const Catalog = ({data}) => {
    return (
        <div>
            {data.length ? (data.map(iceCream => (
                    <IceCreamItem key={iceCream.id} iceCream={iceCream}/>
                )
            )) : <p>The are no ice cream</p>
            }
        </div>
    )
}

export default Catalog;