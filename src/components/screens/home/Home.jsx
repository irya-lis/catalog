import React, {useState} from 'react';
import {iceCreams as iceCreamsData} from './iceCreams.data'
import IceCreamItem from "./iceCream-item/IceCreamItem";
import CreateIceCreamForm from "./create-ice-cream-form/CreateIceCreamForm";

const Home = () => {
    const [iceCreams, setIceCreams] = useState(iceCreamsData);
    return (
        <div>
            <h1>Ice Cream catalog</h1>
            <CreateIceCreamForm setIceCreams={setIceCreams}/>
            <div>

                {iceCreams.length ? (iceCreams.map(iceCream => (
                        <IceCreamItem key={iceCream.id} iceCream={iceCream}/>
                    )
                )) : <p>The are no ice cream</p>
                }

            </div>
        </div>
    );
}

export default Home;
