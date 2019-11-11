import axios from 'axios'
import user from './user.js'
//记得改上传图片路劲
var baseURL = 'http://103.6.222.234:4000/';
// var baseURL = window.loginServer;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = baseURL;
axios.interceptors.request.use(config=>{
    var token = sessionStorage.getItem("token")
    if(token != null) {
        config.headers={"x-access-token": token};
    }
    return config;
})

let executeResult = (res,result) => {
    if(res.data != null) {

        result(res.data)
    } else {
        var obj = new Object()
        obj.code = -1
        obj.msg = "unknown error"
        result(obj)
    }
}

function apiAxios(method, url, params, result) {
    if(method == 'get') {
        axios.get(url,{params: params}).then((res)=>{
            executeResult(res,result)
        }).catch(error => {
                var err = new Object()
                err.code = -1
                err.msg = "unknown error"
                result(err)
        })
    }
    if(method == 'post') {

        var searchParams = new URLSearchParams();
        if(params != null) {
            Object.keys(params).forEach((key) => {
                searchParams.append(key, params[key])
            })
        }
        axios.post(url,searchParams).then((res)=>{
            executeResult(res,result)
        })
    }
}
export default  {
    get:function (url,params,result) {
        return  apiAxios('get',url,params,result)
    },
    post:function (url,params,result) {
        return  apiAxios('post',url,params,result)
    },
    user: user,
}


