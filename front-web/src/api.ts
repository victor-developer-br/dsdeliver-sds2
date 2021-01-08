import axios from "axios";

const API_URL = 'https://victor-sds2-app.herokuapp.com';

export function fetchProducts()
{
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox()