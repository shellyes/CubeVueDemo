
const Engine = {
  startUp() {
    this.loadScriptAndServer(()=>{
    
    })
    return true
  },
  /**
     * 动态同步加载Js和服务器地址
     */
    loadScriptAndServer(callback) {
      var self = this;
      self.getConfig(function (data) {
          var KEY = data["server"];

          // 本地动态加载Js地址
          self.script = data.script;
          // 登录地址
          self.loginServer = data.address[KEY].loginServer;
          // license获取地址
          self.licenseServer = data.address[KEY].licenseServer;
          // ws连接地址 --- 仅测试使用
          data["wsServer"] ? window.wsServer = data.address.wsServer : '';
         if(callback && typeof callback == 'function') callback();
      })
    } ,
  getConfig: function (fn) {
    var config = {
        "name": "vue-cube-demo",
        "version": "2.5.1",
        "description": "魔方实时通信/协作引擎（Cube Engine）是一个全能力的实时云端协作引擎",
        "main": "index.js",
        "directories": {
            "doc": "doc",
            "test": "test"
        },
        "dependencies": {},
        "devDependencies": {
            "chai": "^4.1.2",
            "mocha": "^5.2.0",
            "mochawesome": "^3.0.3"
        },
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "repository": {
            "type": "git"
        },
        "author": "CubeTeam",
        "homepage": "http://getcube.cn/index",
        "server": "test",
        "wsServer": false,
        "script": "http://localhost:8088",
        "address": {
            "dev": {
                "loginServer": "https://dev.user.shixincube.cn",
                "licenseServer": "https://dev.license.shixincube.cn/auth/license/get"
            },
            "test": {
                "loginServer": "https://test-user.shixincube.cn",
                "licenseServer": "https://test-license.shixincube.cn/auth/license/get"
            },
            "release": {
                "loginServer": "https://aws-user.shixincube.com",
                "licenseServer": "https://aws-license.shixincube.com/auth/license/get",
            },
            "zx": {
                "loginServer": "https://user.zlxdbj.com.cn",
    "licenseServer": "https://license.zlxdbj.com.cn/auth/license/get",
},
            "wsServer": {
                "host": "192.168.1.76",
                "port": 7070
            }

        },
        "license": "ISC"
    }

    fn(config);
}
}
export default Engine;
