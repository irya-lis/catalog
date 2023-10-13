import axios from "axios";
import {IIceCream, IIceCreamData} from "../types/iceCream.interface";

export const IceCreamService = {
    async getAll () {
        const response = await axios.get<IIceCream[]>('http://localhost:3000/iceCreams');

        return response.data;
    },


    async getById (id: string) {
        const response = await axios.get<IIceCream[]>(`http://localhost:3000/iceCreams?id=${id}`);

        return response.data[0];
    },

    async create(data: IIceCreamData) {
        return axios.post('http://localhost:3000/iceCreams', data)
    },

    async delete(id: number) {
        return axios.delete(`http://localhost:3000/iceCreams/${id}`)
    },

}

