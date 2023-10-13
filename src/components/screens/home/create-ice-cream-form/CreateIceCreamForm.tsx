import React from "react";
import styles from "./CreateIceCreamForm.module.css";
import {useForm} from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import useCreateIceCream from "./useCreateIceCream";
import {IIceCreamData} from "../../../../types/iceCream.interface";


const CreateIceCreamForm = () => {

    const {register, reset, handleSubmit, formState: {errors}} = useForm<IIceCreamData>({
        mode: 'onChange'
    })

    const {createIceCream} = useCreateIceCream(reset);


    return (
        <form className={styles.form} onSubmit={handleSubmit(createIceCream)}>
            <input
                {...register('name', {required: 'Name is required!'})}
                placeholder="Name"
            />
            <ErrorMessage errors={errors?.name?.message} />

            <input
                {...register('price', {required: 'Price is required!'})}
                placeholder="Price"
            />
            <ErrorMessage errors={errors?.price?.message}/>

            <input
                {...register('image', {required: 'Image is required!'})}
                placeholder="Image"
            />
            <ErrorMessage errors={errors?.image?.message}/>

            <button className="btn">Create</button>

        </form>
    )
}

export default CreateIceCreamForm;
