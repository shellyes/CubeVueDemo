<template>
  <div class="ly-wrapper">
    <!-- 登录 -->
    <el-row :gutter="10" class="mb10">
      <el-col :span="10">
        <!-- 登录 -->
        <user-login @getAccountList="getAccountList"></user-login>
      </el-col>
      <el-col :span="14">
        <div class="ly-content-box">
          <div class="login-title">操作</div>
          <div class="tx-c login-status fz14">{{operationStatus}}</div>
          <div class="operation-item dib">
            <span class="operation-title">视频分辨率:</span>
            <el-select v-model="videosize" placeholder="请选择账号">
              <el-option value="SQCIF">SQCIF (128×96)</el-option>
              <el-option value="QQVGA">QQVGA (160×120)</el-option>
              <el-option value="QVGA" selected="selected">QVGA (320×240)</el-option>
              <el-option value="CIF">CIF (352×288)</el-option>
              <el-option value="VGA">VGA (640×480)</el-option>
              <el-option value="SVGA">SVGA (800×600)</el-option>
              <el-option value="HD">HD (960×720)</el-option>
              <el-option value="XGA">XGA (1024×768)</el-option>
              <el-option value="SXGA">SXGA (1280×1024)</el-option>
              <el-option value="UXGA">UXGA (1600×1200)</el-option>
              <el-option value="WQVGA">WQVGA (400×240)</el-option>
              <el-option value="WCIF">WCIF (512×288)</el-option>
              <el-option value="WVGA">WVGA (800×480)</el-option>
              <el-option value="WSVGA">WSVGA (1024×600)</el-option>
              <el-option value="WHD">WHD (1280×720)</el-option>
              <el-option value="WXGA">WXGA (1280×768)</el-option>
              <el-option value="WUXGA">WUXGA (1920×1200)</el-option>
              <el-option value="W432P">W432P (768×432)</el-option>
              <el-option value="W480P">W480P (768×480)</el-option>
            </el-select>
          </div>
          <div class="operation-item dib">
            <span class="operation-title">@</span>
            <el-input-number
              v-model="framerate"
              class="operation-num"
              controls-position="right"
              @change="changeFramerate"
            ></el-input-number>
          </div>
          <div class="operation-item dib">
            <span class="operation-title">codec:</span>
            <el-select class="operation-num" v-model="codec" placeholder>
              <el-option value="VP8">VP8</el-option>
              <el-option value="VP9">VP9</el-option>
              <el-option value="H264">H264</el-option>
            </el-select>
          </div>
          <div class="operation-item dib">
            <span class="operation-title">音量:</span>
            <el-slider
              class="format-tooltip"
              v-model="volume"
              :show-tooltip="false"
              :format-tooltip="changeVolume"
            ></el-slider>
          </div>
          <div class="operation-item dib ml30">
            <span class="operation-title">对方账号:</span>
            <el-input v-model="sendCubeId" class="operation-num"></el-input>
          </div>
          <br />
          <div class="operation-item dib">
            <el-button class="mb10" size="small" type="primary" plain @click="call(true)">视频呼叫</el-button>
            <el-button class="mb10" size="small" type="primary" plain @click="call(false)">语音呼叫</el-button>
            <el-button
              class="mb10"
              v-if="videoCall"
              size="small"
              type="primary"
              plain
              @click="answer"
            >接听</el-button>
            <el-button
              class="mb10"
              v-if="videoCall"
              size="small"
              type="primary"
              plain
              @click="terminate"
            >挂断</el-button>
            <el-button
              class="mb10"
              v-if="videoCall"
              size="small"
              type="primary"
              plain
              @click="localvideo"
            >{{localvideoText}}</el-button>
            <el-button
              class="mb10"
              v-if="videoCall"
              size="small"
              type="primary"
              plain
              @click="localvoice"
            >{{localvoiceText}}</el-button>
            <el-checkbox v-model="checked" @change="changeAuto">自动接听</el-checkbox>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <div class="ly-content-box">
          <div class="login-title">本地视频</div>
          <div class="panel-body text-center">
            <video id="local_video" width="100%" autoplay></video>
            <div v-if="isAudio" class="audioTip">仅使用语音通话</div>
          </div>
          <div class="panel-footer">
            <form class="form-inline">
              <label class="form-control-static" style="font-weight:normal;">
                <span class="text-info">
                  <span class="glyphicon"></span> {{recordLocalState}}
                </span>
              </label>
              <el-button :disabled="!isRecordLocal" type="primary" icon="iconfont iconvideo" plain @click="startRecordLocal">录制视频</el-button>
              <el-button :disabled="isRecordLocal" type="primary" icon="iconfont iconzanting" plain @click="stopRecordLocal"></el-button>
              <el-button type="primary" icon="iconfont iconbofanganniu" plain></el-button>
              <el-button type="primary" icon="iconfont icondiannao" plain @click="shareScreen"></el-button>
              <el-button type="primary" icon="iconfont iconziyuan" plain>上传</el-button>
              <span class="record-time">{{recordLocalTime}}</span>
            </form>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="ly-content-box">
          <div class="login-title">远程视频</div>
          <div class="panel-body text-center">
            <video id="remote_video" width="100%" autoplay></video>
            <div v-if="isAudio" class="audioTip">仅使用语音通话</div>
          </div>
          <div class="panel-footer">
            <form class="form-inline">
              <label class="form-control-static" style="font-weight:normal;">
                <span class="text-info">
                  <span class="glyphicon"></span> 准备就绪
                </span>
              </label>
              <el-button type="primary" icon="iconfont iconvideo" plain>录制视频</el-button>
              <el-button type="primary" icon="iconfont iconzanting" plain></el-button>
              <el-button type="primary" icon="iconfont iconbofanganniu" plain></el-button>
              <span class="record-time">{{recordRemoteTime}}</span>
            </form>
          </div>
        </div>
      </el-col>
    </el-row>
    <audio id="call_audio"></audio>
  </div>
</template>

<script>
import UserLogin from "../common/UserLogin";
import * as CubeSignaling from "../../../static/lib/CubeSignaling";

import { AppAccountListener } from "../../listener/AppAccountListener";
import { AppCallListener } from "../../listener/AppCallListener";
import { MediaProbe } from "../../listener/MediaProbe";
let appInfo = require(`${__dirname}/../../../appInfo`)
export default {
  data: function() {
    return {
      accountInfo: [],
      appKey: appInfo.appKey,
      appId: appInfo.appId,
      cubeId: "",
      cubeToken: "",
      centerDialogVisible: false,
      errorInfo: "appId和appKey错误,请检查!!!",
      loginStatus: "请先登录",
      sendCubeId: "",
      messageLit: [],
      messageContent: "",
      operationStatus: "登录后输入用户名即可进行通话、消息和白板",
      videosize: "SQCIF (128×96)",
      framerate: 15,
      codec: "VP8",
      volume: 100,
      isVideo: false,
      videoCall: false,
      checked: false,
      isAudio: false,
      videoInfo: {},
      localvoiceText: "关闭话筒",
      localvideoText: "关闭视频",
      refreshTimer: 0,
      recordLocalState: "准备就绪",
      recordLocalTime: "00:00",
      recordRemoteTime:"00:00",
      isRecordLocal:true,
    };
  },
  components: {
    UserLogin
  },
  methods: {
    setVideos() {
      var self = this;
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
         this.$message("不支持 enumerateDevices() .");
          return;
        }
     navigator.mediaDevices.enumerateDevices().then((devices) => {
           
            devices.map((item) => {
                if (item.kind == 'videoinput') {
                    // let videoHtml = `<li data-deviceId="${item.deviceId}"><a  id="" href="javascript:;"><span class="glyphicon glyphicon-time"></span> ${item.label}</a></li>`;
                    // $(".choose_video .dropdown-menu").append(videoHtml);
                    console.log("devices",devices)
                }
            });

            // $(".choose_video .dropdown-menu li").click(function () {
            //     let deviceId = $(this).attr("data-deviceId");
            //     if (null != deviceId) {
            //         window.cube.getCallService().renegotiate({deviceId: deviceId});
            //     }
            // });
        });
    },
    //自动接听
    changeAuto() {
      var autoAnswer = this.checked;
      var callService = window.cube.getCallService();
      if (callService != null) {
        callService.setAutoAnswer(autoAnswer);
      }
    },
    //呼叫
    call(video) {
      var self = this;
      var callee = self.sendCubeId;
      if (null == callee) {
        self.operationStatus = "呼叫失败，输入的对端数据错误";
        return;
      }

      cube.configure({
        videoSize: self.videoSize,
        frameRate: { min: 5, max: parseInt(self.frameRate) },
        videoCodec: self.codec
      });
      // 发起呼叫
      if (cube.getCallService().makeCall(callee, video)) {
        self.operationStatus = "呼叫 " + callee;
      } else {
        self.operationStatus = "呼叫 " + callee + " 失败";
      }
      if (!video) {
        this.isAudio = true;
      }
    },
    // 发起应答
    answer() {
      window.cube.getCallService().answerCall(true);
    },
    //挂断
    terminate() {
      cube.getCallService().terminateCall();
    },
    //关闭/恢复本地视频
    localvideo() {
      if (!window.cube.getSession().isCalling()) {
        return;
      }

      if (window.cube.getMediaService().isVideoEnabled()) {
        window.cube.getMediaService().closeVideo();
        this.localvideoText = "开启视频";
      } else {
        window.cube.getMediaService().openVideo();
        this.localvideoText = "关闭视频";
      }
    },
    // 关闭/恢复麦克风
    localvoice() {
      if (window.cube.getMediaService().isVoiceEnabled()) {
        window.cube.getMediaService().closeVoice();
        this.localvoiceText = "开启话筒";
      } else {
        window.cube.getMediaService().openVoice();
        this.localvoiceText = "关闭话筒";
      }
    },
    // 开始录像
    startRecordLocal() {
      var self = this;
      if (self.refreshTimer > 0) {
        clearTimeout(self.refreshTimer);
        self.refreshTimer = 0;
      }
      if (cube.getSession().isCalling()) {
        // 录制通话视频
        if (
          !cube.getMediaService().startLocalRecording({
            bufferSize: 16384,
            sampleRate: 45000,
            type: "video"
          })
        ) {
          alert("启动视频录制失败！");
          return;
        }
        self.recordLocalState='正在录制';
        self.isRecordLocal = false;
        var refreshTimeTask = function() {
          var duration = cube
            .getMediaService()
            .getLocalRecorder()
            .getDuration();
          if (duration > 0) {
            self.recordLocalTime = window.cube.utils.formatDuration(duration);
          }

          self.refreshTimer = setTimeout(refreshTimeTask, 1000);
        };

        self.refreshTimer = setTimeout(refreshTimeTask, 2000);
      }
    },
    // 停止录像
    stopRecordLocal() {
      var self = this;
      self.recordLocalState='准备就绪';
      self.isRecordLocal = true;
      self.recordLocalTime  = '00:00'
      var taskCallback = function(recorder) {
        clearTimeout(self.refreshTimer);
        self.refreshTimer = 0;

        // 记录结束
        // fireRecordEnd(recorder);
      };
      taskCallback();
      if (cube.getMediaService().hasLocalRecorded()) {
        cube.getMediaService().stopLocalRecording(taskCallback);
      } else {
        cube.getMediaService().stopRecording("offline", taskCallback);
      }
    },
    //调整音量
    changeVolume(v) {
      // 判断是否正在通话
        if (!cube.getSession().isCalling()) {
            return;
        }
      cube.getMediaService().setVolume(v);
    },
    changeFramerate(e) {
      console.log(e);
    },
    //屏幕共享
    shareScreen(){
      //  getScreenId((err, sourceId) => {
      //           if (null != sourceId) {
      //               window.cube.getCallService().renegotiate({
      //                   mandatory: {
      //                       chromeMediaSource: 'desktop', chromeMediaSourceId: sourceId, maxWidth: 1280,
      //                       maxHeight: 720,
      //                       maxFrameRate: 18
      //                   }
      //               }, false);
      //           }
      //       });
      //   });
      //   CallUIManager.setVideos();
      var self=this;
      var param = (err, sourceId) => {
                if (null != sourceId) {
                    window.cube.getCallService().renegotiate({
                        mandatory: {
                            chromeMediaSource: 'desktop', chromeMediaSourceId: sourceId, maxWidth: 1280,
                            maxHeight: 720,
                            maxFrameRate: 18
                        }
                    }, false);
                }
            };
            self.$GetScreen.getScreenId(param)
      this.setVideos()
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getAccountList(accountInfo) {
      this.accountInfo = accountInfo;
      this.sendCubeId = accountInfo[1].cubeId;
    }
  },
  watch: {
    "$store.state.videoCall"(data) {
      this.videoCall = data;
      if (!data) {
        this.isAudio = false;
        this.operationStatus = "登录后输入用户名即可进行通话、消息和白板";
      }
    },
    "$store.state.videoInfo"(data) {
      this.videoInfo = data;
      if (data.direction == "incoming") {
        this.operationStatus = "来电，请接听！";
      }
      if (!data.video) {
        this.isAudio = true;
      }
      if (data.type == "ringing") {
        this.operationStatus = "对方正在振铃";
      }else if(data.type == "failed"){
        if(data.errorCode == 1400){
          this.operationStatus = "对方正在通话中";
        }else{
          this.operationStatus = "错误码: "+data.errorCode;
        }
          
      }else if(data.type == "connected"){
        this.operationStatus = "已连接";

      }
    }
  },
  mounted() {
    if (this.$Engine.startUp()) {
      if (
        cube.startup(err => {
          if (err) {
            console.log("引擎启动失败");
          } else {
            //加载音视频模块
            cube.loadSignaling(
              CubeSignaling.CallServiceWorker,
              "local_video",
              "remote_video",
              "call_audio"
            );

            cube.getAccountService().addListener(new AppAccountListener(this));
            // 设置通话监听器
            cube.getCallService().addListener(new AppCallListener(this));

            // 添加媒体探针
            cube.getMediaService().addMediaProbe(new MediaProbe(this));
          }
        })
      ) {
        console.log("引擎启动中....");
        let appId = appInfo.appId;
        cube.configure({
          appid: appId,
          licenseServer: this.$store.state.licenseServer
        });
      } else {
        console.log("Cube Engine 启动失败！");
      }
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
.dib {
  display: inline-block;
}
.operation-title {
  font-size: 14px;
  color: #606266;
}
.operation-num {
  width: 100px;
}
.fz14 {
  font-size: 14px;
}
.format-tooltip {
  width: 100px;
  display: inline-block;
  position: relative;
  height: 23px;
}
.operation-item {
  margin-bottom: 10px;
}
.glyphicon {
  width: 11px;
  height: 11px;
  border-radius: 20px;
  position: relative;
  border: 1px solid #31708f;
  display: inline-block;
}
.glyphicon::after {
  position: absolute;
  content: "";
  width: 7px;
  height: 7px;
  top: 2px;
  left: 2px;
  background-color: #31708f;
  border-radius: 7px;
}
.audioTip {
  text-align: center;
  font-weight: bold;
  color: red;
  margin-bottom: 10px;
}
.record-time {
  display: inline-block;
  color: #333;
  background: #ecf5ff;
  border: 1px solid #b3d8ff;
  padding: 9px 15px;
  border-radius: 3px;
  margin: 0 10px;
}
</style>