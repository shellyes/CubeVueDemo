<template>
  <div class="ly-wrapper">
    <!-- 登录 -->
    <el-row :gutter="10">
      <el-col :span="8">
          <!-- 登录 -->
        <user-login @getAccountList="getAccountList"></user-login>
        <label>全局视频传输格式</label>
        <el-select  v-model="videoCodec" placeholder="全局视频传输格式">
          <el-option v-for="item in videoCodecList" :key="item" :value="item"></el-option>
        </el-select>
        <div class="create-whiteboard ly-content-box">
           <el-button size="small" type="primary" plain @click="createConference">创建会议</el-button> 
           <div class="whiteboard-list">
            <div
              class="whiteboardItem flex flex-pac"
              v-for="item,index in conferenceList"
              :key="index"
            >
              <div class="flex-f1" @click="changeActive(index)">会议{{index+1}}</div>
              <span class="deleteIcon" @click="delWhiteBoard(index,item.sn)">x</span>
            </div>
          </div>
          
        </div>
      </el-col>
      <el-col :span="16">
        <div class="whiteboard-box">
              <div class="panel panel-default">
                <div class="panel-heading">会议视频</div>
                <div id="local_conference_media" class="panel-body" style="background: black;position: relative">
                    <div class="panel-body text-center">
                        <video id="c_local_video" autoplay
                               style="position:absolute;bottom: 6px;right: 6px;height: 30%;width: 30%; background: #fff;"></video>
                        <video id="local_video" autoplay style="display: none"></video>
                        <video id="c_remote_video" autoplay style="width: 100%;"></video>
                        <video id="remote_video" autoplay style="display: none"></video>
                    </div>
                </div>
                <div class="panel-body text-center" style="display: none">
                    <audio id="c_bell_audio"></audio>
                    <audio id="call_audio"></audio>
                </div>
                <div class="panel-body text-center" style="display: none">
                    <canvas id="c_local_canvas"></canvas>
                </div>
                <div class="panel-footer">

                </div>
            </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserLogin from "../common/UserLogin";
import * as CubeSipworker from "../../../static/lib/CubeSipworker";

import { AppAccountListener } from "../../listener/AppAccountListener";
import { AppConferenceListener } from "../../listener/AppConferenceListener";
export default {
  data: function() {
    return {
      sendCubeId: "",
      accountInfo: [],
      videoCodecList:[
        'H264',
        'VP9',
        'VP8'
      ],
      videoCodec:'H264',
      conferenceList:[],
    };
  },
  components: {
    UserLogin
  },
  methods: {
    createConference(){},
     getAccountList(accountInfo) {
      this.accountInfo = accountInfo;
      this.sendCubeId = accountInfo[1].cubeId;
    },
  },
  watch: {
   
  },
  mounted(){
    if (
      cube.startup(err => {
        if (err) {
          console.log("引擎启动失败");
        } else {//加载音视频模块
          cube.loadSignaling("local_video", "remote_video", "call_audio");
          // 加载会议模块
          cube.loadConference(CubeSipworker.Conference.ServiceWorker,"c_local_video", "c_remote_video", "c_bell_audio", "c_local_canvas");
 
          cube.getAccountService().addListener(new AppAccountListener(this));
        
        }
      })
    ) {
      console.log("引擎启动中....");
       let appId = localStorage.getItem("appId")?localStorage.getItem("appId"):'9c2ed36ae5d34131b3768ea432da6cea005';
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