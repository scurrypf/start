import /*自定义名字*/ axios from /*包的名字*/ "axios";

axios.get('http://localhost:8080/user',{
    headers:{
        name:'zpf'
    }
}).then(res => console.log(res.data))




// // 1.请求方法(get, post, put, delete)
// http.get(/** 2.请求的路径(看服务端)*/ 'http://localhost:8080/user', /** 请求的配置 */{
//     // 3.请求头部字段(看服务端)
//     headers: {
//         pjw: 'pjw'
//     }
// }).then(res => console.log(res.data))

// // url 传递需要注意的问题
// // 协议 + :// + 域名(主机ip地址) + 端口号 + 资源相对路径 
// // http://localhost:80/user
// const username = 'pjw'
// const password = '123456'

// async function main() {
//     const result = await http.get(`http://localhost:8080/user`, {
//         headers: {
//             pjw: 'pjw'
//         },
//         query: {
//             password,
//             username
//         }
//     })
//     console.log(result.data)
// }

// main()