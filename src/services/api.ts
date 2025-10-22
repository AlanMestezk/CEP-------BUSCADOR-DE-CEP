
import axios from "axios";

const urlApi = 'http://viacep.com.br/ws'

const api = axios.create(
    {
        baseURL: urlApi
    }
)

export default api;