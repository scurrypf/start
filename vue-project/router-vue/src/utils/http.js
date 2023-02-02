import axios from "axios";

// const MOCK_URL = 'http://127.0.0.1:4523/m1/2104970-0-default';

// const PRODUCTION_URL = 'http://jisutqybmf.market.alicloudapi.com';

const LOGIN_UAL = 'http://127.0.0.1:3000/api'
const http = axios.create({
    baseURL:LOGIN_UAL,
    timeout:1000,
    headers:{
        Authorization:'APPCODE d686570081264047b8b7aaec01fb82dc',
    }
})

export{
    http
}