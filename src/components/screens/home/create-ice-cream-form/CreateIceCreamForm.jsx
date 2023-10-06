import React, {useState} from "react";
import styles from "./CreateIceCreamForm.module.css";

const CreateIceCreamForm = ({setIceCreams}) => {
    const [data, setData] = useState({
        name: '',
        price: '',
        image: ''
    })


    const createIceCream = (e) => {
        e.preventDefault();
        setIceCreams(prev => [ {id: prev.length + 1, ...data}, ...prev])
    }

    return(
        <form className={styles.form}>
            <input placeholder="Name"
                   onChange={e => setData(prev => ({
                       ...prev, name: e.target.value
            }))} value={data.name}/>
            <input placeholder="Price"
                   onChange={e => setData(prev => ({
                       ...prev, price: e.target.value}))}
                   value={data.price}/>
            <input placeholder="Image"
                   onChange={e => setData(prev => ({
                       ...prev, image: e.target.value}))}
                   value={data.image}/>
            <button className="btn" onClick={e => createIceCream(e)}>Create</button>

        </form>
    )
}

export default CreateIceCreamForm;
