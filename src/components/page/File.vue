<template>
  <div class="ly-wrapper">
        <!-- 登录 -->
        <user-login @getAccountList="getAccountList"></user-login>
        <div class="create-whiteboard ly-content-box">
          <div class="login-title">文件列表</div>
            <el-button size="small" type="primary" plain @click="uploadFile">上传文件</el-button>    
           <div class="whiteboard-list">
              <div class="whiteboard-box">
            <div  v-for="item,index in messageList"
          :key="index">
              <div v-if="item.type == 'file' && item.isSelf">
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
            </div>
        </div>
           </div>
          
        </div>
  </div>
</template>

<script>
import UserLogin from "../common/UserLogin";
import * as CubeFile from "../../../static/lib/CubeFile";
import * as CubeMessage from "../../../static/lib/CubeMessage";

import { CubeFileStatusListener } from "../../listener/CubeFileStatusListener";
import { AppAccountListener } from "../../listener/AppAccountListener";
import { AppMessageListener } from "../../listener/AppMessageListener";
import { AppFileManagerListener } from "../../listener/AppFileManagerListener";
let appInfo = require(`${__dirname}/../../../appInfo`)

var CubeFileInfo = CubeFile.Info,
    CubeImageMessage=CubeMessage.Entity.Image;
export default {
  data: function() {
    return {
      sendCubeId: "",
      messageList: [],
      accountInfo: [],
    };
  },
  components: {
    UserLogin
  },
  methods: {
    getAccountList(accountInfo) {
      this.accountInfo = accountInfo;
      this.sendCubeId = accountInfo[1].cubeId;
    },
    uploadFile(){
      var self = this;
       var fileInfo = new CubeFileInfo();
            fileInfo.chooseFile(function (file,el) {
            fileInfo.setListener(new CubeFileStatusListener(self));
            //获取Cube文件服务
            var fileService = window.cube.getFileManagerService();

            fileService.upload(fileInfo.identifier, fileInfo);
            })
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
        let appId = appInfo.appId
      cube.configure({
        appid: appId,
        licenseServer: this.$store.state.licenseServer
      });
    } else {
      console.log("Cube Engine 启动失败！");
    }
  },
  created: function() {
    // this.getAccount(this.appKey, this.appId);
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
  font-size: 16px;
}
.mb30 {
  margin-bottom: 30px;
}
.mb10 {
  margin-bottom: 10px;
}
.whiteboard-box{
  height: 100%;
}
</style>