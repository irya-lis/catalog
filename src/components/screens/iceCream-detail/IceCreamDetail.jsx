import React, {useEffect, useState} from "react";
import {IceCreamService} from "../../../services/iceCream.service";
import {Link, useParams} from "react-router-dom";
import IceCreamItem from "../home/iceCream-item/IceCreamItem";
import {withAuth} from "../../../HOC/withAuth";

const IceCreamDetail = () => {
    const {id} = useParams();
    const [iceCream, setIceCream] = useState({});

    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            const data = await IceCreamService.getById(id);
            setIceCream(data);
        }

        fetchData();
    }, [id]);

    if(!iceCream.name) return <p>Loading...</p>

    return (
        <div>
            <Link to='/'>Back</Link>
            <IceCreamItem iceCream={iceCream}/>
        </div>
    )
}

export default withAuth(IceCreamDetail) ;