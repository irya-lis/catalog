import IceCreamItem from "../screens/home/iceCream-item/IceCreamItem";
import React, {FC} from "react";
import {IIceCream} from "../../types/iceCream.interface";

interface ICatalog {
    data?: IIceCream[];
    onDeleteIceCream: (id: number) => Promise<void>;
}

const Catalog: FC<ICatalog> = ({data = [], onDeleteIceCream  }) => {
    return (
        <div>
            {data.length ? (data.map(iceCream => (
                    <IceCreamItem key={iceCream.id} iceCream={iceCream} onDeleteIceCream={onDeleteIceCream}
                    />
                )
            )) : <p>The are no ice cream</p>
            }
        </div>
    )
}

export default Catalog;