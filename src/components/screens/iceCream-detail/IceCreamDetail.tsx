import React, { useEffect, useState } from "react";
import { IceCreamService } from "../../../services/iceCream.service";
import { Link, useParams } from "react-router-dom";
import IceCreamItem from "../home/iceCream-item/IceCreamItem";
import { withAuth } from "../../../HOC/withAuth";
import { IIceCream } from "../../../types/iceCream.interface";
import { useQueryClient } from "@tanstack/react-query";

const IceCreamDetail = () => {
    const { id } = useParams();
    const [iceCream, setIceCream] = useState<IIceCream>({} as IIceCream);
    const [deleted, setDeleted] = useState(false);

    const queryClient = useQueryClient();

    const handleDeleteIceCream = async (id: number) => {
        try {
            await IceCreamService.delete(id);
            await queryClient.invalidateQueries(["iceCream"]);
            setDeleted(true);
        } catch (error) {
            console.error("Error deleting ice cream", error);
        }
    };

    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            const data = await IceCreamService.getById(id);
            setIceCream(data);
        };

        fetchData();
    }, [id, handleDeleteIceCream]);

    if (deleted) return <p>Ice cream has been deleted.</p>;

    return (
        <div>
            <Link to="/">Back</Link>
            <IceCreamItem iceCream={iceCream} onDeleteIceCream={handleDeleteIceCream} />
        </div>
    );
};

export default withAuth(IceCreamDetail);
