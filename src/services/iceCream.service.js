import React from "react";
import axios from "axios";

export const IceCreamService = {
    async getAll () {
        const response = await axios.get('http://localhost:3000/iceCreams');

        return response.data;
    },


    async getById (id) {
        const response = await axios.get(`http://localhost:3000/iceCreams?id=${id}`);

        return response.data[0];
    },

    async create(data) {
        return axios.post('http://localhost:3000/iceCreams', data)
    }
}

