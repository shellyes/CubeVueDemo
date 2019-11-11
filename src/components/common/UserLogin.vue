<template>
  <!-- 登录 -->
  <div>
    <el-form label-width="100px" class="demo-ruleForm mb30 ly-content-box">
      <div class="login-title">用户登录</div>
      <div class="tx-c login-status">{{loginStatus}}</div>
      <div class="mb10">
        <el-select :disabled="isLogin" v-model="cubeId" placeholder="请选择账号">
          <el-option v-for="item in accountInfo" :key="item.cubeId" :value="item.cubeId"></el-option>
        </el-select>
        </div>
        <div>
        <el-button class="mb10" size="small" type="primary" plain @click="login" :disabled="isLogin">登录</el-button>
        <el-button class="mb10" size="small" type="danger" plain @click="loginOut">注销登录</el-button>
        <el-button class="mb10" size="small" type="success" plain @click="create">创建cube号</el-button>
      </div>
    </el-form>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>{{errorInfo}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
let appInfo = require(`${__dirname}/../../../appInfo`)
export default {
  data() {
    return {
      accountInfo: [],
      appKey: appInfo.appKey,
      appId: appInfo.appId,
      cubeId: "",
      cubeToken: "",
      centerDialogVisible: false,
      errorInfo: "appId和appKey错误,请检查!!!",
      loginStatus: "请先登录",
      isLogin: false
    };
  },
  methods: {
    create() {
      var self = this;
      self.$api.user
        .createCube(this.appKey, this.appId)
        .then(result => {
          if (result.state.code == 200) {
            self.centerDialogVisible = true;
            self.errorInfo = "创建成功,cubeId:" + result.data.cube;
          }
        })
        .catch(e => {
          self.centerDialogVisible = true;
          self.errorInfo = "注册操作出错，请检查用户名是否在证书的有效号段内。";
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    accountList(){
        this.$emit("getAccountList", this.accountInfo);   
    },
    getAccount(appKey, appId, callback) {
      var self = this;
      self.$api.user
        .findByAppId(appKey, appId)
        .then(result => {
          if (result.state.code == 200) {
            self.accountInfo = result.data.list;
            self.cubeId = result.data.list[0].cubeId;
            self.sendCubeId = result.data.list[1].cubeId;
            this.accountList()
            if (callback && typeof callback == "function") {
              callback && callback();
            }
          } else {
            self.centerDialogVisible = true;
          }
        })
        .catch(e => {
          self.centerDialogVisible = true;
          self.errorInfo = "注册操作出错，请检查用户名是否在证书的有效号段内。";
        });
    },
    login() {
      var self = this;
      this.loginStatus = "登陆中...";
      self.$api.user
        .getToken(this.appKey, this.appId, this.cubeId)
        .then(result => {
          console.log(result);
          if (result.state.code == 200) {
            self.cubeToken = result.data.cubeToken;
            var loginData = {
              appKey: this.appKey,
              appId: this.appId,
              cube: this.cubeId
            };
            var displayName = "name";

            var ret = cube
              .getAccountService()
              .login(
                loginData.cube.toString(),
                "123456",
                self.cubeToken,
                displayName
              );
            if (!ret) {
              self.showAlert(
                "注册操作出错，请检查用户名是否在证书的有效号段内。"
              );
            } else {
            }
          } else {
            self.centerDialogVisible = true;
          }
        })
        .catch(e => {
          self.centerDialogVisible = true;
          self.errorInfo = "注册操作出错，请检查用户名是否在证书的有效号段内。";
        });
    },
    loginOut() {
      this.$confirm("是否确定退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          cube.getAccountService().logout();
          this.$message({
            type: "success",
            message: "退出登录!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  },
  created() {
    if (this.appKey && this.appId) {
      this.getAccount(this.appKey, this.appId);
    } else {
      this.$router.replace("/");
    }
  },
  watch: {
    "$store.state.isEngineLogin"(data) {
      if (data == "success") {
        this.loginStatus = "登录成功";
        this.isLogin = true;
      } else {
        this.loginStatus = "请先登录";
        this.isLogin = false;
      }
    }
  }
};
</script>
<style scoped>
.login-title {
  padding: 10px 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
  margin-bottom: 30px;
}
.login-status {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.mb30 {
  margin-bottom: 30px;
}
.mb10 {
  margin-bottom: 10px;
}
</style>