import {API_ENDPOINT} from '../constants/common';
import axios from 'axios';


const myAxios = () => axios.create({ baseURL: API_ENDPOINT,headers: {}});
export default myAxios;
