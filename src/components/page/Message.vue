<template>
  <div class="ly-wrapper">
    <!-- 登录 -->
    <user-login @getAccountList="getAccountList"></user-login>
    <!-- 文本信息 -->
    <el-form label-width="100px" class="demo-ruleForm ly-content-box">
      <div class="login-title">文本信息</div>
      <el-form-item label="对方账号">
        <el-select v-model="sendCubeId" placeholder="请选择账号">
          <el-option v-for="item in accountInfo" :key="item.cubeId" :value="item.cubeId"></el-option>
        </el-select>
      </el-form-item>
      <div class="message-box mb10" id="message-box">
        <div
          v-for="item,index in messageList"
          :key="index"
          class="message-item mb10"
          :class="item.isSelf ? 'tx-r':'tx-l'"
        >
          <div v-if="item.type == 'text'">
            <div v-if="item.isSelf">{{item.content}} :{{item.cubeId}}</div>
            <div v-if="!item.isSelf">{{item.cubeId}}: {{item.content}}</div>
          </div>
          <div v-if="item.type == 'file'">
            <div class="fileInfo">
              文件名: {{item.file.name}}
            </div>
            <div class="progress flex flex-pac" v-if='item.status != "complate" && item.status != "cancel"'>
              <el-progress class="flex-f1 mr10" :text-inside="true" :stroke-width="24" :percentage="item.progress" status="success"></el-progress>
              <el-button size="small" type="primary" @click='pauseUpload(item)'>暂停</el-button>
              <el-button size="small" type="success" @click='resumeUpload(item)'>恢复上传</el-button>
              <el-button size="small" type="danger" @click='cancelUpload(item)'>取消</el-button>

            </div>
          </div>
          <div v-if="item.type == 'image'">
            <div v-if="item.isSelf">
              <div>{{item.file.name}} :{{item.cubeId}}</div>
              <div><img :src="item.file.thumb" alt=""></div>
            </div>
            <div v-if="!item.isSelf">
              <div>{{item.file.name}}: {{item.content}}</div>
              <div><img :src="item.file.thumb" alt=""></div>
              </div>
          </div>
        </div>
      </div>
      <el-button size="small" type="primary" @click="sendmessage('file')">发送文件</el-button>
      <el-button size="small" type="primary" @click="sendmessage('image')">发送图片</el-button>
      <!-- <el-button size="small" type="primary" @click="sendmessage('audio')">发送短语音</el-button>
      <el-button size="small" type="primary" @click="sendmessage">发送卡片消息</el-button>
      <el-button size="small" type="primary" @click="sendmessage">发送富文本消息</el-button>
      <el-button size="small" type="primary" @click="sendmessage">发送位置消息</el-button>
      <el-button size="small" type="primary" @click="sendmessage">发送匿名消息</el-button>
      <el-button size="small" type="primary" @click="sendmessage">消息历史</el-button>
      <el-button size="small" type="primary" @click="sendmessage">获取回执列表</el-button> -->

      <div style="margin-top: 15px;">
        <el-input
          placeholder="请输入内容"
          @keyup.enter.native="sendmessage('text')"
          v-model="messageContent"
        >
          <el-button slot="append" @click="sendmessage('text')">发送</el-button>
        </el-input>
      </div>
    </el-form>
  </div>
</template>

<script>

import { AppAccountListener } from "../../listener/AppAccountListener";
import { AppMessageListener } from "../../listener/AppMessageListener";
import { AppFileManagerListener } from "../../listener/AppFileManagerListener";

import UserLogin from "../common/UserLogin";
import * as CubeFile from "../../../static/lib/CubeFile";
import * as CubeMessage from "../../../static/lib/CubeMessage";

import { CubeFileStatusListener } from "../../listener/CubeFileStatusListener";
var CubeFileInfo = CubeFile.Info,
    CubeImageMessage=CubeMessage.Entity.Image;
export default {
  data: function() {
    return {
      sendCubeId: "",
      messageList: [],
      messageContent: "",

      accountInfo: []
    };
  },
  components: {
    UserLogin
  },
  methods: {
    sendmessage(type) {
      var self = this;
      if (!self.sendCubeId) {
        this.$message.error("请选择用户ID");
        return false;
      }
      this.$store.commit('updateSendCubeId',this.sendCubeId.toString())
      if (type == "text") {
        if (self.messageContent.trim().length == 0) {
          this.$message.error("不能发送空消息");
          return false;
        }
        //获取消息服务
        var msgService = cube.getMessageService();
        var ret = msgService.sendMessage(
          self.sendCubeId.toString(),
          self.messageContent
        );
        if (!ret) {
          this.$message.error("发送信息失败");
          return;
        }
        return false;
      }
      if (type == "file") {
         var fileInfo = new CubeFileInfo();
            fileInfo.chooseFile(function (file,el) {
            fileInfo.setListener(new CubeFileStatusListener(self));
            //获取Cube文件服务
            var fileService = window.cube.getFileManagerService();

            fileService.upload(fileInfo.identifier, fileInfo);


        });

      }
      if( type == 'image'){
        var receiver = self.sendCubeId.toString();
        var entity = new CubeImageMessage(receiver);
        entity.chooseFile(function (file) {
            cube.getMessageService().sendMessage(receiver, entity);
        })

      }
    },
    getAccountList(accountInfo) {
      this.accountInfo = accountInfo;
      this.sendCubeId = accountInfo[1].cubeId;
    },
    pauseUpload(file){
      console.log(file)
      cube.getFileManagerService().pauseUpload(file.sn);
    },
    resumeUpload(file){
      var fileInfo = new CubeFileInfo();
      fileInfo.setListener(new CubeFileStatusListener(this));
      fileInfo.identifier = file.sn;
      cube.getFileManagerService().resumeUpload(file.sn,fileInfo);
    },
    cancelUpload(file){
      cube.getFileManagerService().cancelMessage(file.sn);
    },
  },
  watch: {
    "$store.state.messageList"(data) {
      this.messageList = data;
    },
    "$store.state.fileUploadStatus"(file){
        this.messageList.forEach((item,index)=>{
          if(file.sn == item.sn){
            this.$set(this.messageList[index],"progress",file.progress)
            this.$set(this.messageList[index],"status",file.status)
          }
        })
    },
    messageList() {
      this.$nextTick(() => {
        var div = document.getElementById("message-box");
        div.scrollTop = div.scrollHeight;
      });
    }
  },
 mounted(){
  if (
      cube.startup(err => {
        if (err) {
          console.log("引擎启动失败");
        } else {
          // 加载即时消息模块
          cube.loadMessager(CubeMessage.ServiceWorker);
          
          cube.loadFileManager(CubeFile.Manager.ServiceWorker);  

          cube.getAccountService().addListener(new AppAccountListener(this));
        //   cube.getConferenceService().addListener(new AppConferenceListener(this));
        //消息监听
          cube.getMessageService().addListener(new AppMessageListener(this));
        // 文件监听
          cube.getFileManagerService().addListener(new AppFileManagerListener(this));

        }
      })
    ) {
      console.log("引擎启动中....");
        let appId = localStorage.getItem("appId")?localStorage.getItem("appId"):'9c2ed36ae5d34131b3768ea432da6cea005'
      cube.configure({
        appid: appId,
        licenseServer: this.$store.state.licenseServer
      });
    } else {
      console.log("Cube Engine 启动失败！");
    }
  },
  created: function() {}
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

.message-box {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 30px;
  border-radius: 5px;
}
.tx-r {
  text-align: right;
}
.tx-l {
  text-align: left;
}
</style>