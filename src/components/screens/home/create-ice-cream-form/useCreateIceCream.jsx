import React from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IceCreamService} from "../../../../services/iceCream.service";

const useCreateIceCream = ({reset}) => {
    const queryClient = useQueryClient();

    const {mutate} = useMutation(['create ice cream'],
        (data) => IceCreamService.create(data), {
            onSuccess: () => {
                queryClient.invalidateQueries('iceCream')
                reset()
            }
        })

    const createIceCream = (data) => {
        mutate(data)
    }

    return {createIceCream}
}

export default useCreateIceCream;