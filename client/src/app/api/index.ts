import axios from "axios";
import { PreferencesType } from "../..";
const url = "http://localhost:5000";

type AxiosCall<T> = {
    data: T
}

const API = axios.create({
    baseURL: url,
});


export const fetchShop = async () => await API.get("/globals?info=shop").then((res): AxiosCall<PreferencesType> => res.data);

export const putProduct = async (id: string | number, data: PreferencesType) => await API.put(`/products/${id}`, data)
    .then((res): AxiosCall<PreferencesType> => res.data);

export const fetchProduct = async (id: string | number) => await API.get(`/products/${id}`)
    .then((res): AxiosCall<unknown> => res.data);

export const fetchProductMetafields = async (id: string | number) => await API.get(`/products/${id}/metafields`)
    .then((res): AxiosCall<unknown> => res.data);