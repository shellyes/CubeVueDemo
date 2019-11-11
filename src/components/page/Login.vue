<template>
  <div class="login-wrap">
    <div class="ms-login">
      <img class="cube-logo" src="../../assets/logo120.png" alt />
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
        class="demo-ruleForm"
      >
        <el-form-item prop="appId">
          <el-input placeholder="appId" v-model="ruleForm.appId"></el-input>
        </el-form-item>
        <el-form-item prop="appkey">
          <el-input
            v-model="ruleForm.appKey"
            placeholder="appKey"
            @keyup.enter.native="submitForm('ruleForm')"
          ></el-input>
        </el-form-item> 
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">设置APP信息</el-button>
        </div>
        <p style="font-size:12px;line-height:30px;color:#999;">Tips : {{ruleForm.tipString}}</p>
      </el-form>
    </div>
    <div class="tx-r c91">v1.0.1</div>
  </div>
</template>

<script>
let appInfo = require(`${__dirname}/../../../appInfo`)

export default {
  data: function() {
    return {
      ruleForm: {
        appKey: appInfo.appKey,
        appId: appInfo.appId,
        tipString: "请输入appKy,appId",
        accountList:[],
      },
      rules: {
        appKey: [
          {
            required: true,
            message: "请输入appKey",
            trigger: "blur"
          }
        ],
        appId: [
          {
            required: true,
            message: "请输入appId",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log("....2");
      var self = this;
      self.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem("appKey", self.ruleForm.appKey);
          localStorage.setItem("appId", self.ruleForm.appId);

          self.$api.user
            .loginWithAppKey(self.ruleForm.appKey, self.ruleForm.appId)
            .then(result => {
              if (result.state.code == 200) {
                      self.$router.replace('/demoItem');
                      
              } else {
                self.ruleForm.tipString = "登录失败";
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    
  },
 
};
</script>

<style scoped>
.cube-logo {
  display: block;
  margin: 0 auto 20px;
}
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  color: #fff;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 30%;
  width: 300px;
  height:280px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}

.login-btn {
  text-align: center;
  font-size: 14px;
}

.login-btn button {
  width: 100%;
  height: 36px;
}
</style>
