import axios from "axios";

// const MOCK_URL = 'http://127.0.0.1:4523/m1/2104970-0-default';


const PRODUCTION_URL = 'http://jisutqybmf.market.alicloudapi.com';

const http = axios.create({
    baseURL:PRODUCTION_URL,
    timeout:1000,
    headers:{
        Authorization:'APPCODE d686570081264047b8b7aaec01fb82dc',
    }
})

export{
    http
}