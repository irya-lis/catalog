import React from 'react';
import CreateIceCreamForm from "./create-ice-cream-form/CreateIceCreamForm";
import {IceCreamService} from "../../../services/iceCream.service";
import {useQuery} from "@tanstack/react-query";
import Header from "../../ui/Header";
import Catalog from "../../ui/Catalog";

const Home = () => {

    const {data, isLoading} = useQuery(['iceCream'], () => IceCreamService.getAll(),)
    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1>Ice Cream catalog</h1>
            <Header/>
            <CreateIceCreamForm/>
           <Catalog  data={data}/>
        </div>
    );
}

export default Home;
