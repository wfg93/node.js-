import axios from 'axios';

//export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };


//创建服务类
class apiService{
  constructor(){

  }
  createAjax(url,params,type){
    return new Promise((resolve,reject)=>{
      axios({
        url:url,
        params:params,
        method:type
      }).then((response)=>{
        resolve(response.data)
      }).catch((error)=>{
        reject(error)
      })
    })
  }
  get(url,params={}){
    return this.createAjax(url,params,'GET')
  }
  post(url,params={}){
    return this.createAjax(url,params,'POST')
  }
}
export const apiServe = new apiService()
