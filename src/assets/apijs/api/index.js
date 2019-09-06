import {apiServe} from "../api.server";
import {commonUrl} from "../common/config";


const EData = (url,type='get') => (params) => apiServe[type](commonUrl+url,params)

//首页
export const HomePaGe={
//主题
  Atestpage:EData('/topics'),
//详情
  //detaiLS:EData('/topic/')

}

