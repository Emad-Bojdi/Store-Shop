import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

api.interceptors.response.use(Response => Response.data, Error => Promise.reject(Error));

export default api;