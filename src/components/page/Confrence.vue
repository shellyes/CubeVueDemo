<template>
  <div class="Conference">
    <!-- 登录 -->
    <el-row :gutter="10">
      <el-col :span="8" style="text-align: center;border:1px solid #ddd;width:464px">
          <!-- 登录 -->
        <user-login @getAccountList="getAccountList"></user-login>
        <p class="conference_label">全局视频传输格式</p>
        <el-select  v-model="videoCodec" placeholder="全局视频传输格式">
          <el-option v-for="item in videoCodecList" :key="item" :value="item"></el-option>
        </el-select>
        <p class="conference_label">会议类型选择</p>
        <el-select v-model="confrenceType" clearable placeholder="会议类型">
          <el-option
            v-for="item in confrenceTypeList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button size="small" type="primary" plain @click="dialogSFUSetting = true" v-show="confrenceType.includes('sfu')">SFU会议设置</el-button> 
        
        <div class="conferenceList">
           <el-button size="small" type="primary" plain @click="dialogCreate=true">创建会议</el-button> 
            <div
              class=" flex flex-pac"
              v-for="(item,index) in conferenceList"
              :key="index"
            >
              <div class="flex-f1" style="margin:20px 0;background: #ddd;">
                <label>{{"会议号:"+item.conferenceId+"  绑定群组:"+item.bindGroup}}</label>
                <el-button size="small" type="primary" plain @click="dialogInvite=true;inviteConferenceId=item.conferenceId">邀请</el-button> 
                <el-button size="small" type="success" plain @click="handleJoin(item.conferenceId, item.type, item.presenters[0])">加入</el-button> 
                <el-button size="small" type="danger" plain @click="handleQuit(item.conferenceId)">退出</el-button> 
                <el-button size="small" type="danger" plain @click="handleReject(item.conferenceId)">拒绝</el-button> 
              </div>
            </div>
          
        </div>
      </el-col>
      <el-col :span="16">
        <div class="conferenceStreamList">
          <div class="local_fs" v-show="!confrenceType.includes('sfu')">
            <video id="c_local_video" autoplay style="width: 100%"></video>
            <span style="color:white">local_video</span>
          </div>
          <div class="remote_fs" v-show="!confrenceType.includes('sfu')">
            <video id="c_remote_video" autoplay v-show="!confrenceType.includes('sfu')" style="width: 100%"></video>
            <span style="color:white">remote_video</span>
          </div>  
            
            <div v-for="stream in localStreams" :key="stream.getID()" class="member-group">
              <div :id="stream.getID()">
               
              </div>
               <span>{{'localStream:' + (stream.getAttributes() && stream.getAttributes().cubeId) || stream.getID() }}</span>
            </div>
            <div v-for="stream in remoteStreams" :key="stream.getID()" class="member-group">
              <div :id="stream.getID()">
                
              </div>
              <span>{{'StreamID:' + (stream.getAttributes() && stream.getAttributes().cubeId) || stream.getID() }}</span>
            </div>
            <!-- <div v-for=""></div> -->
        </div>
      </el-col>
    </el-row>
    <el-dialog title="邀请成员入会" :visible.sync="dialogInvite">
      <el-input v-model="inviteMembers" placeholder="输入成员Cube号码, 用','号分开" class="full_width" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleInvite()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- sfu会议设置弹窗 -->
    <el-dialog
      title="SFU会议设置面板"
      :visible.sync="dialogSFUSetting"
      width="30%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="type">
          <el-select v-model="form.type" clearable placeholder="SFU会议流类型">
            <el-option v-for="item in streamTypeList" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="camera">
          <el-select v-model="form.camera" placeholder="摄像头选择" @change="showMedia">
            <el-option v-for="item in cameraList" :key="item.value" :label="item.label" :value="item.value" ></el-option>
          </el-select>
        </el-form-item>
        <video ref="mediashow" autoplay></video>
        <el-form-item label="minVideoSize">
          <el-col>
            <el-select  v-model="form.minVideoSize" placeholder="请选择最小分辨率">
              <el-option v-for="item in videoSizeList" :key="item.value" :value="item.value" :label="item.label"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="maxVideoSize">
          <el-col>
            <el-select  v-model="form.maxVideoSize" placeholder="请选择最大分辨率">
              <el-option v-for="item in videoSizeList" :key="item.value" :value="item.value" :label="item.label"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="frameRate">
          <label>{{"min:"+form.frameRate[0]}}</label>
          <el-slider v-model="form.frameRate[0]"  show-stops :max="30" :min="1"></el-slider>
          <label>{{"max:"+form.frameRate[1]}}</label>
          <el-slider v-model="form.frameRate[1]"  show-stops :max="30" :min="1"></el-slider>
        </el-form-item>
        <el-form-item label="videoBW">
          <label>{{"min:"+form.videoBW[0]}}</label>
          <el-slider v-model="form.videoBW[0]" :step="50"  show-stops :max="4096" :min="100"></el-slider>
          <label>{{"max:"+form.videoBW[1]}}</label>
          <el-slider v-model="form.videoBW[1]"  :step="50" show-stops :max="4096" :min="100"></el-slider>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogSFUSetting = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 会议设置弹窗 -->
    <el-dialog title="创建会议" :visible.sync="dialogCreate" width="30%" >
      <el-form ref="form" :model="createform" label-width="80px">
          <el-form-item label="群组">
          <el-select  placeholder="默认空" v-model="createform.bindGroup" class="full_width">
            <el-option v-for="item in bindGroupList" :key="item.name" :value="item.name" :label="item.name"></el-option>
          </el-select>
          </el-form-item>
          <el-form-item label="成员">
            <el-input placeholder="输入成员Cube号码, 用','号分开" v-model="createform.conferenceMembers" class="full_width"></el-input>
          </el-form-item>
          <el-form-item label="时长">
            <el-select v-model="createform.conferenceExpired" class="full_width">
              <el-option v-for="item in conferenceExpiredList" :key="item.value" :value="item.value" :label="item.label"></el-option>
            </el-select>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createConference">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import UserLogin from "../common/UserLogin";
import * as CubeSignaling from "../../../static/lib/CubeSignaling";
import * as CubeSipworker from "../../../static/lib/CubeSipworker";

import { AppAccountListener } from "../../listener/AppAccountListener";
import { AppConferenceListener } from "../../listener/AppConferenceListener";
import { AppGroupListener } from "../../listener/AppGroupListener";
export default {
  data: function() {
    return {
      inviteConferenceId:'',
      sendCubeId: "",
      accountInfo: [],
      bindGroupList:[],
      inviteMembers:"",
      dialogInvite:false,
      dialogSFUSetting:false,
      dialogCreate:false,
      localStreams:[],
      remoteStreams:[],
      videoCodecList:['H264','VP9','VP8'],
      videoSizeList:[
        {value:0,label:"320*240"},
        {value:1,label:"640*480"},
        {value:2,label:"1280*720"},
        {value:3,label:"1920*1080"},
      ],
      conferenceExpiredList:[
        {value:'1800',label:"30分钟"},
        {value:'3600',label:"1小时"},
        {value:'7200',label:"2小时"},
        {value:'14400',label:"3小时"},
        {value:'0',label:"0"},
      ],
      streamTypeList:["video","audio","screen"],
      videoCodec:'H264',
      conferenceList:[],
      confrenceType:'sfu-video-call',
      cameraList:[],
      videoInputStream:null,
      confrenceTypeList:[
        {value:"voice-call",label:"多人音频"},
        {value:"video-call",label:"多人视频"},
        {value:"voice-conference",label:"多人语音会议"},
        {value:"video-conference",label:"多人视频会议"},
        {value:"share-screen",label:"FS屏幕分享会议"},
        {value:"sfu-video-call",label:"SFU多人视频"}
      ],
      createform:{
        conferenceMembers:'',
        conferenceExpired:'1800',
        bindGroup:'',
        confrenceType:'sfu-video-call'
      },
      form: {
          type: 'video',
          camera: '',
          minVideoSize:0,
          maxVideoSize:0,
          frameRate:[8,12],
          videoBW:[300,300]
        }
    };
  },
  components: {
    UserLogin
  },
  methods: {
    updateStreams(stream){
      let existence = false;
      console.log(stream)
      if(stream.local){
        this.localStreams.forEach((item,index)=>{
          if(item.getID()==stream.getID()){
            existence = true;
            this.localStreams.splice(index,1)
          }
        });
        if(!existence){
          this.localStreams.push(stream);
          setTimeout(()=>{
            stream.show(stream.getID(), {bar: false,})
          },50)
        }
      }else{
        this.remoteStreams.forEach((item,index)=>{
          if(item.getID()==stream.getID()){
            existence = true;
            this.remoteStreams.splice(index,1)
          }
        });
        if(!existence){
           this.remoteStreams.push(stream);
           setTimeout(()=>{
            stream.show(stream.getID(), {bar: false,})
          },50)
        }
      }
    },
    dataRest(){
      this.inviteConferenceId = '';
      this.sendCubeId = "";
      this.accountInfo = [];
      this.bindGroupList = [];
      this.inviteMembers ="";
      this.dialogInvite = false;
      this.dialogSFUSetting = false;
      this.dialogCreate = false;
      this.localStreams = [];
      this.remoteStreams = [];
      this.videoCodec = 'H264';
      this.conferenceList = [];
      this.confrenceType = 'sfu-video-call';
      this.cameraList = [];
      this.videoInputStream = null;
    },
    handleReject(conferenceId){
      cube.getConferenceService().reject(conferenceId.toString());
    },
    handleQuit(conferenceId){
      cube.getConferenceService().quit(conferenceId.toString());
      this.localStreams = [];
      this.remoteStreams = [];
    },
    handleInvite(){
      if(this.inviteMembers==""){
        this.$message.error("请输入成员cube号")
      }
      let members = this.inviteMembers.split(",")
      cube.getConferenceService().inviteConference(this.inviteConferenceId.toString(), members);
    },
    handleJoin(conferenceId , conferenceType, creater){
      let videoSizeWidths=[320,640,1280,1920];
      let videoSizeHeights=[240,480,720,1080];
      let min = this.form.minVideoSize;
      let max = this.form.maxVideoSize;
      let videoSize = [videoSizeWidths[min],videoSizeHeights[min],videoSizeWidths[max],videoSizeHeights[max]];
      let conferenceService= cube.getConferenceService();
      if(conferenceType == CubeConferenceType.ShareScreen){
        if(creater==cube.accName){
          getScreenId((err, sourceId) => {
            conferenceService.applyJoin(conferenceId, sourceId);
          }, ['screen']);
        }else{
          conferenceService.applyJoin(conferenceId)
        }
        return false;
      }
      if(this.form.type == 'screen'){
        getScreenId((err, sourceId) => {
            let con1 = new CubeStreamConfig('video',videoSize,null);
            let con2 = new CubeStreamConfig('screen',[320,640,1280,1920], sourceId);
            con1.setOptions({maxVideoBW:this.form.videoBW[0],minVideoBW:this.form.videoBW[1]});
            con1.setVideoFrameRate(this.form.frameRate);
            let configs =[con1,con2];
            console.log("configs===113",configs);
            if(this.form.camera!=''){
                con1.setMandatory(
                    {deviceId:{
                        exact:this.form.camera
                    }});
            }
            conferenceService.applyJoin(conferenceId, configs);
        }, ['screen']);
      }else {
          let con1 = new CubeStreamConfig(this.form.type,videoSize,null);
              con1.setOptions({maxVideoBW:this.form.videoBW[0],minVideoBW:this.form.videoBW[1]});
              con1.setVideoFrameRate(this.form.frameRate);
              if(this.form.camera!=''){
                  con1.setMandatory(
                      {deviceId:{
                          exact:this.form.camera
                      }});
              }
          conferenceService.applyJoin(conferenceId, [con1]);
      }
    },
    createConference(){
      if(cube.accName){
        //获取成员列表
        let conferenceMembers = this.createform.conferenceMembers.split(',');
        //获取会议时间
        let conference_expired = this.createform.conferenceExpired;
        //获取绑定群组
        let bindGroup = this.createform.bindGroup;
        //获取Cube会议服务
        let conferenceService = window.cube.getConferenceService();
        let coferenceConfig = new CubeConferenceConfig(conferenceMembers,this.confrenceType,bindGroup,5,false,conference_expired);
        coferenceConfig.isMux = true;
        conferenceService.applyConference(coferenceConfig);
        this.dialogCreate = false;
      }else{
        this.$message.error("引擎cube未登陆")
      }
    },
     getAccountList(accountInfo) {
      this.accountInfo = accountInfo;
      this.sendCubeId = accountInfo[1].cubeId;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    onSubmit() {
      console.log('submit!');
    },
    cameraChange(){

    },
    handleError(err) {
      if(err.message == "Permission denied"){
          this.$message.error("摄像头权限失败，请开启使用权限");
      }else if(err.message == "Could not start video source"){
          this.$message.error("请检查设备是否已被占用或获取麦克风");
      }
    },
    showMedia(){
      if(this.videoInputStream){
          this.videoInputStream.getTracks().forEach(track => {
              track.stop();
          });
          this.videoInputStream = null;
      }
      const constraints = {
        audio: false,
        video: {
            deviceId: this.form.camera ? {exact: this.form.camera} : undefined,
            width: { ideal: 320 },
            height: { ideal: 240 }
        }
      };
      console.log(this.form.camera)
      navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{
        this.$refs.mediashow.srcObject = stream;
        this.videoInputStream = stream;
        }).catch(this.handleError)
    },
    queryCamera(){
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        this.cameraList = []
        devices.map((item,index) => {
          if (item.kind == 'videoinput') {
            this.cameraList.push({value:item.deviceId,label:item.label});
            if(!this.form.camera){
              this.form.camera = item.deviceId;
            }
          }
        });
      });
    },
    querybindGroup(){
      cube.getGroupService().queryGroups((groupEntity)=>{
        this.bindGroupList=groupEntity.list;
        console.log(this.bindGroupList)
      })
    }
  },
  computed:{
    localStreamsNew(){
      return this.localStreams
    },
    localStreamsNew(){
      return this.localStreams
    }
  },
  watch: {
   "dialogSFUSetting"(val){
     if(val){
         this.showMedia()
     }else{
       if(this.videoInputStream){
          this.videoInputStream.getTracks().forEach(track => {
              track.stop();
          });
          this.videoInputStream = null;
      }
     }
   },
   "$store.state.isEngineLogin"(val){
     this.dataRest();
   },
  //  "localStreamsNew"(newVal,oldVal){
  //    if(newVal.length>oldVal.length){
  //      console.log(newVal.length,oldVal.length)
  //      let stream = newVal[newVal.length];
  //      this.$nextTick(()=>{
  //        stream.show(stream.getID())
  //      })
  //    }
  //  },
  //  "remoteStreamsNew"(newVal,oldVal){
  //    if(newVal.length>oldVal.length){
  //      console.log(newVal.length,oldVal.length)
  //      let stream = newVal[newVal.length];
  //      this.$nextTick(()=>{
  //        stream.show(stream.getID())
  //      })
  //    }
  //  }
  },
  mounted(){
     this.queryCamera();
    if (
      cube.startup(err => {
        if (err) {
          console.log("引擎启动失败");
        } else {
          // 加载会议模块
          cube.loadConference(CubeConferenceServiceWorker,"c_local_video", "c_remote_video", "c_bell_audio", "c_local_canvas");
          cube.getConferenceService().addListener(new AppConferenceListener(this))
          cube.getAccountService().addListener(new AppAccountListener(this));
          cube.getGroupService().addListener(new AppGroupListener(this));
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
.local_fs{
  position: absolute;
    bottom: 0;
    right: 0;
    width: 280px;
}
.remote_fs{
    width: 80%;
}
.Conference{
  margin: 80px auto;
  overflow-x: hidden
}
.conferenceStreamList{
  width: 100%;
  min-height:600px ;
  background-color: #444444;
  position: relative;
}
.conferenceList{
  margin-top: 20px
}
.conference_label{
  margin-top:30px
}
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