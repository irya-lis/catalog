import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IceCreamService} from "../../../../services/iceCream.service";
import {IIceCreamData} from "../../../../types/iceCream.interface";
import {SubmitHandler, UseFormReset} from "react-hook-form";



const useCreateIceCream = (reset:UseFormReset<IIceCreamData>) => {
    const queryClient = useQueryClient();

    const {mutate} = useMutation(['create ice cream'],
        (data: IIceCreamData) => IceCreamService.create(data), {
            onSuccess: () => {
                queryClient.invalidateQueries(['iceCream'])
                reset()
            }
        })

    const createIceCream: SubmitHandler<IIceCreamData> = (data) => {
        mutate(data)
    }
    return {createIceCream}
}

export default useCreateIceCream;