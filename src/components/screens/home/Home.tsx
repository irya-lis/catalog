import React from 'react';
import CreateIceCreamForm from "./create-ice-cream-form/CreateIceCreamForm";
import { IceCreamService } from "../../../services/iceCream.service";
import { useQuery } from "@tanstack/react-query";
import Header from "../../ui/Header";
import Catalog from "../../ui/Catalog";
import ScrollToTopButton from "../../ui/ScrollToTopButton";
import { useQueryClient } from "@tanstack/react-query";

const Home = () => {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery(['iceCream'], () => IceCreamService.getAll(),)
    if (isLoading) return <p>Loading...</p>

    const handleDeleteIceCream = async (id: number) => {
        try {
            await IceCreamService.delete(id);
            await queryClient.invalidateQueries(['iceCream']);
        } catch (error) {
            console.error('Error deleting ice cream', error);
        }
    };

    return (
        <div>
            <h1 style={{ color: '#deb2f8' }}>Ice Cream catalog</h1>
            <Header />
            <CreateIceCreamForm />
            <Catalog data={data} onDeleteIceCream={handleDeleteIceCream} />
            <ScrollToTopButton />
        </div>
    );
}

export default Home;
