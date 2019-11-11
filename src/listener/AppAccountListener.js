
/*
 * 实现注册监听器。
 */
export class AppAccountListener{
	constructor (vue) {
		this.vue = vue;
    }

    /**
     * 账号登录成功回调
     * @param session {Session}
     */
    onLogined (session) {
      this.vue.$store.state.isEngineLogin = "success";
      console.log("账号登录成功回调")
      if(this.vue.bindGroupList){
        this.vue.querybindGroup()
      }
    }

    /**
     * 账号注销成功回调
     * @param session {Session}
     */
    onLogouted (session) {
      this.vue.$store.state.isEngineLogin = "logout";
      console.log("账号注销成功回调")
    }

    onFailed (error) {
      error.type = "failed";
      this.vue.$store.state.isEngineLogin = "error";
      console.log(error,"账号失败回调")
    }
};
