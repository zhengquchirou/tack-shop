/* 
    ajax 请求函数
*/
import axios from 'axios'
const baseURL = 'http://localhost:3000'
class HttpRequest{
    constructor(baseURL){
        this.baseURL = baseURL
    }
    getInsideConfig(){
        const config = {
            baseURL: this.baseURL
        }
        return config
    }
    interceptors(instance){
        instance.interceptors.request.use(
            (config)=>{
                return config
            },
            (error)=>{
                return Promise.reject(error)
            }
        ),
        instance.interceptors.response.use(
            (config)=>{
                return config
            },
            (error)=>{
                return Promise.reject(error)
            }
        )
    }
    request(options){
        const instance = axios.create()
        options = {...options(this.getInsideConfig()), ...options}
        this.interceptors(instance)
        return instance(options)
    }
}
export default new HttpRequest(baseURL)