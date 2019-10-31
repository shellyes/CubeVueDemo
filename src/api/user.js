import api from './index.js'

 let loginWithAppKey = (appKey,appId) => {
    return new Promise((result) => {
    	let params = {
            "appKey": appKey,
            "appId": appId
        }
        api.post("app/validate",params,result)
    })
}

let findByAppId = (appKey,appId) => {
    return new Promise((result) => {
    	let params = {
            "appKey": appKey,
            "appId": appId
        }
        api.post("user/page/findByAppId",params,result)
    })
}

let getToken = (appKey,appId,cubeId) => {
    return new Promise((result) => {
    	let params = {
            "appKey": appKey,
            "appId": appId,
            "cube":cubeId
        }
        api.post("user/login",params,result)
    })
}

let createCube = (appKey,appId) => {
    return new Promise((result) => {
    	let params = {
            "appKey": appKey,
            "appId": appId,
        }
        api.post("user/created",params,result)
    })
}
export default {
    loginWithAppKey,
    findByAppId,
    getToken,
    createCube
}
