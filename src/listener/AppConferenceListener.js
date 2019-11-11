/**
 * Created by GuanYong on 2015/9/7.
 */

/*
 * 实现会议监听器。
 */
export class AppConferenceListener {
  constructor(vue) {
    this.vue = vue;
    this.self = null;
  }

  /**
   * 错误回调
   *
   * @param {Conference} conference
   * @param {CubeError} error
   */
  onConferenceFailed(error, conference) {
    console.log("会议发生错误", conference, error);

    let typeName = '会议';
    let errMsgMap = {
      408: typeName + "连接超时",
      477: "加入" + typeName + "失败",
      603: "您正在通话中, 暂时无法进行此操作",
      700: typeName + "连接失败",
      704: '参数错误',
      711: typeName + "工作机状态异常",
      714: "连接超时, 请稍后重试",
      801: "该通话已结束",
      1400: "您已在其他设备通话中，暂时无法操作",
      1500: typeName + "已存在",
      1501: typeName + "人数超过上限",
      1502: typeName + "被其它终端拒绝",
      1503: "已在其他设备操作",
      1505: '用户正忙',
      1507: "拒绝失败",
      1508: typeName + "已结束",
      1510: typeName + '已结束',
      1520: typeName + '未开始',
      1526: '您已经在会议中',
      1551: '操作过于频繁，请稍后再试',
      1552: "连接超时, 请稍后重试",
      1700: '摄像头开启失败',
      1702: "加入会议失败",
    };

    let errMsg = errMsgMap[error && error.code];
    if (null == errMsg) {
      errMsg = '未知错误' + error.code;
    }
    this.vue.$message({
      showClose: true,
      message: errMsg,
      type: 'error',
      duration: 3000
    });
    let param = {
      operate: "error",
      code:error.code
    };//会议已结束，服务器状态未改
    
    if ('1505' == error.code) {
      return;
    }
  }
  /**
     * 当自己所在的会议被取消时发生。
     *
     * @param {Conference} conference - 会议对象实例
     */
    onConferenceClosed(conference) {
      console.log(conference, 'onConferenceClosed监听');
      this.vue.localStreams = [];
        this.vue.remoteStreams = [];
  }
  /**
   * 当有会议申请成功时且自己是其中成员时发生。
   *
   * @param {Conference} conference
   * @param {CubeUser} from
   */
  onConferenceApplied(conference, from) {
    console.log('当创建会议成功时回调', conference, from);
    this.vue.conferenceList.push(conference)
  }

  /**
   * 同账号在其他设备创建会议成功时回调
   *
   * @param conference 会议实体
   * @param from       会议创建者
   */
  onConferenceCreatedOther(conference, from) {
  }

  /**
   * 当会议销毁时回调
   *
   * @param {Conference} conference
   * @param {CubeUser} from
   */
  onConferenceDestroyed(conference, from) {
    console.log(conference,from,"会议被销毁");
    this.vue.$router.push({
      path: "/home"
    });
  }

  /**
   * 同账号在其他设备销毁会议时回调
   *
   * @param conference 会议实体
   * @param from       会议销毁者（默认为创建者）
   */
  onConferenceDestroyedOther(conference, from) {
  }

  /**
   * 会议音频启用禁用回调
   *
   * @param {Conference} conference
   * @param {boolean} enable
   */
  onAudioEnable(conference, enable) {
    console.log("会议音频启用禁用回调",conference,enable)
  }

  /**
   * 会议视频启用禁用回调
   *
   * @param {Conference} conference
   * * @param {boolean} enable
   */
  onVideoEnable(conference, enable) {
    console.log("会议视频启用禁用回调",conference,enable)
  }

  /**
   * 收到邀请回调(仅邀请者自己和被邀请者回调)
   *
   * @param {Conference} conference
   * @param {CubeUser} from
   * @param {Array<CuberUser>} inviters
   */
  onConferenceInvited(conference, from, inviters) {
    console.log(conference, from, inviters)
    this.vue.conferenceList.push(conference)
  }

  /**
   * 同账号在其他设备发起邀请
   *
   * @param {Conference} conference
   * @param {CubeUser} from
   * @param {Array<CuberUser>} inviters
   */
  onConferenceInvitedOther(conference, from, inviters) {
  }

  /**
   * 同意邀请加入时回调
   *
   * @param {Conference} conference
   * @param {CubeUser} from 同意者
   * @param {CubeUser} joinedMember 加入者
   */
  onConferenceAcceptInvited(conference, from, joinedMember) {
  }

  /**
   * 同账号在其他设备同意邀请
   *
   * @param conference   会议实体
   * @param from         邀请者
   * @param joinedMember 同意加入者
   */
  onConferenceAcceptInvitedOther(conference, from, joinedMember) {
  }

  /**
   * 拒绝邀请入群回调
   *
   * @param {Conference} conference
   * @param {CubeUser} from
   * @param {CubeUser} rejectMember
   */
  onConferenceRejectInvited(conference, from, rejectMember) {
  }

  /**
   * 同账号在其他设备拒绝邀请
   *
   * @param conference   会议实体
   * @param from         邀请者
   * @param rejectMember 拒绝加入者
   */
  onConferenceRejectInvitedOther(conference, from, rejectMember) {
  }

  /**
   * 通知账号除加入设备之外的其他设备回调
   *
   * @param {Conference} conference 会议实体
   * @param {CubeUser} from 申请者/邀请者
   * @param {CubeUser} joinedMember 入会者
   */
  onConferenceJoinFromOthers(conference, from, joinedMember) {
  }

  /**
   * 会议成员状态改变
   *
   * @param {Conference} conference
   * @param {Array<ConferenceControl>} list
   */
  onConferenceUpdated(conference, list) {
    console.log("会议成员状态改变", conference, list);
    let param = null;
    let item = list[0];
    let type = "video";
    // if(item.action == "kick" && item.controlled.cubeId == this.self.cube){//被踢者是自己,则直接跳转
    //   this.vue.$router.push({
    //     path: "/home"
    //   });
    // }else{
    //   let cube = item.control.cubeId;
    //   let status = conference.status;
    //   for(let state in status){//判断是视频还是音频
    //     if(state == cube){
    //       if(!status[state].videoEnabled){
    //         type = "audio"
    //       }
    //     }
    //   }
    //   let operateArr = ["kick","presenter","toClose","media","audio","video"]
    //   if (operateArr.indexOf(item.action) > -1) {
    //     param = {
    //       operate: item.action,
    //       actionId: item.control.cubeId,//管理者
    //       actionedId: item.controlled.cubeId,//被踢者
    //       conferenceId: conference.conferenceId,
    //       members: conference.members,
    //       founder:conference.founder,
    //       masters:conference.masters,
    //       status:conference.status,
    //       type:type
    //     };
    //     if(param != null){
    //       this.vue.$store.commit("updateConferenceState",param);
    //     }
    //   }
    // }
  }

  /**
   * 退出时回调
   *
   * @param {Conference} conference
   * @param {CubeUser} quitMember 退出者
   */
  onConferenceQuited(conference, quitMember) {
    console.log("会议成员退出", quitMember, conference);
    
  }

  /**
   * 同账号在其他设备退出会议
   *
   * @param conference 会议实体
   * @param quitMember 退出者
   */
  onConferenceQuitedOther(conference, quitMember) {
    console.log("有人退出了会议", quitMember, conference);
    
  }
  /**
   * 被邀请入会回调
   * @param {Conference} conference 会议对象实例
   * @param {String} fromCubeId 邀请人 Cube 号
   */
  onConferenceInvite(conference, fromCubeId) {
    console.log(conference,fromCubeId);
    this.vue.conferenceList.push(conference)
   }
  /**
   * 邀请入会(仅自己终端)
   *
   * @param {Conference} conference - 会议对象实例
   * @param {Array} success - 被成功邀请集合。
   * @param {Array} failure - 邀请失败的集合（失败原因可能人数超限制，可能被邀请者不在线直接失败）。
   */
  onConferenceInviteResponded(conference, success ,failure){
    console.log(conference, success ,failure);
    if(success){
      this.vue.$message.info("邀请成功")
    }else{
      this.$message.error("邀请失败")
    }
    
  }
  /**
   * 加入会议
   *
   * @param {Conference} conference
   * @param {CubeUser} from
   * */
  onConferenceJoined(conference, from) {//仅仅是与引擎联通，还未真正加入会议
    this.self = JSON.parse(localStorage.getItem("User"));
    console.log("仅仅是与引擎联通，还未真正加入会议", conference, from);
    this.vue.confrenceType=conference.type
    
  }
  onConferenceAddFrame(conference){
    
  }
  /**
   * 同账号在其他设备加入会议sss
   *
   * @param conference   会议实体
   * @param joinedMember 入会者
   */isJoined
  onConferenceJoinedOther(conference, from) {
    console.log("同账号在其他设备加入会议,引擎加入完成", conference)
  }

  /**
   * 当自己加入会议,会议音视频流连接成功时回调
   * @param {Conference} conference 会议对象实例
   */
  onConferenceConnected(conference) {//这里是自己真正的进入会议
    console.log("当自己加入会议", conference);
    if(!conference.type.includes("sfu")){
      document.getElementById("c_local_video").srcObject = cube.sipService.localStream;
      document.getElementById("c_remote_video").srcObject = cube.sipService.remoteStream
    }
  }

  /**
   * 有流通过时
   *
   * @param {Conference} conference - 会控动作
   * @param {stream} stream - 音视频流对象。
   */
  onConferenceAddStream(conference, stream) {
    console.log("流接通时",conference);
    if(stream){
      if(stream.local){
        if(this.vue.localStreams){
          this.vue.updateStreams(stream);
        }
      }else{
        if(this.vue.remoteStreams){
          this.vue.updateStreams(stream)
        }
      }
    }
    
   
  }


  /**
   * 当自己所在的会议视频流移除时。
   *
   * @param {Conference} conference - 会议对象实例
   * @param {stream} stream - 音视频流对象。
   */
  onConferenceRemoveStream(conference, stream) {
    let cube = (stream.getAttributes() && stream.getAttributes().cube || stream.getAttributes().cubeId) || stream.getID();
    console.log(conference,stream,"当自己所在的会议视频流移除时",cube);
    if(stream.local){
      this.vue.localStreams = [];
      this.vue.remoteStreams = [];
    }else{
      this.vue.updateStreams(stream)
    }
  }





  /**
   * 当sip监听end时发生。
   *
   * @param {Conference} conference - 会控动作
   */
  onConferenceSipEnd(conference) {
  }

  /**
   * 会议音视频流连接失败
   * @param {Conference} conference 会议对象实例
   */
  onConferenceCallDisConnected() {
  }
}
;
window.getScreenId = function(callback, custom_parameter) {
  if(navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob)) {
      // microsoft edge => navigator.getDisplayMedia(screen_constraints).then(onSuccess, onFailure);
      callback({
          video: true
      });
      return;
  }

  // for Firefox:
  // sourceId == 'firefox'
  // screen_constraints = {...}
  if (!!navigator.mozGetUserMedia) {
      callback(null, 'firefox', {
          video: {
              mozMediaSource: 'window',
              mediaSource: 'window'
          }
      });
      return;
  }

  window.addEventListener('message', onIFrameCallback);

  function onIFrameCallback(event) {
      if (!event.data) return;

      if (event.data.chromeMediaSourceId) {
          if (event.data.chromeMediaSourceId === 'PermissionDeniedError') {
              callback('permission-denied');
          } else {
              callback(null, event.data.chromeMediaSourceId, getScreenConstraints(null, event.data.chromeMediaSourceId, event.data.canRequestAudioTrack));
          }

          // this event listener is no more needed
          window.removeEventListener('message', onIFrameCallback);
      }

      if (event.data.chromeExtensionStatus) {
          callback(event.data.chromeExtensionStatus, null, getScreenConstraints(event.data.chromeExtensionStatus));

          // this event listener is no more needed
          window.removeEventListener('message', onIFrameCallback);
      }
  }

  if(!custom_parameter) {
      setTimeout(postGetSourceIdMessage, 100);
  }
  else {
      setTimeout(function() {
          postGetSourceIdMessage(custom_parameter);
      }, 100);
  }
};

function getScreenConstraints(error, sourceId, canRequestAudioTrack) {
  var screen_constraints = {
      audio: false,
      video: {
          mandatory: {
              chromeMediaSource: error ? 'screen' : 'desktop',
              maxWidth: window.screen.width > 1920 ? window.screen.width : 1920,
              maxHeight: window.screen.height > 1080 ? window.screen.height : 1080
          },
          optional: []
      }
  };

  if(!!canRequestAudioTrack) {
      screen_constraints.audio = {
          mandatory: {
              chromeMediaSource: error ? 'screen' : 'desktop',
              // echoCancellation: true
          },
          optional: []
      };
  }

  if (sourceId) {
      screen_constraints.video.mandatory.chromeMediaSourceId = sourceId;

      if(screen_constraints.audio && screen_constraints.audio.mandatory) {
          screen_constraints.audio.mandatory.chromeMediaSourceId = sourceId;
      }
  }

  return screen_constraints;
}

function postGetSourceIdMessage(custom_parameter) {
  if (!iframe) {
      loadIFrame(function() {
          postGetSourceIdMessage(custom_parameter);
      });
      return;
  }

  if (!iframe.isLoaded) {
      setTimeout(function() {
          postGetSourceIdMessage(custom_parameter);
      }, 100);
      return;
  }

  if(!custom_parameter) {
      iframe.contentWindow.postMessage({
          captureSourceId: true
      }, '*');
  }
  else if(!!custom_parameter.forEach) {
      iframe.contentWindow.postMessage({
          captureCustomSourceId: custom_parameter
      }, '*');
  }
  else {
      iframe.contentWindow.postMessage({
          captureSourceIdWithAudio: true
      }, '*');
  }
}

var iframe;

// this function is used in RTCMultiConnection v3
window.getScreenConstraints = function(callback) {
  loadIFrame(function() {
      getScreenId(function(error, sourceId, screen_constraints) {
          if(!screen_constraints) {
              screen_constraints = {
                  video: true
              };
          }

          callback(error, screen_constraints.video);
      });
  });
};

function loadIFrame(loadCallback) {
  if (iframe) {
      loadCallback();
      return;
  }

  iframe = document.createElement('iframe');
  iframe.onload = function() {
      iframe.isLoaded = true;

      loadCallback();
  };
  iframe.src = 'https://www.webrtc-experiment.com/getSourceId/'; // https://wwww.yourdomain.com/getScreenId.html
  iframe.style.display = 'none';
  (document.body || document.documentElement).appendChild(iframe);
}

window.getChromeExtensionStatus = function(callback) {
  // for Firefox:
  if (!!navigator.mozGetUserMedia) {
      callback('installed-enabled');
      return;
  }

  window.addEventListener('message', onIFrameCallback);

  function onIFrameCallback(event) {
      if (!event.data) return;

      if (event.data.chromeExtensionStatus) {
          callback(event.data.chromeExtensionStatus);

          // this event listener is no more needed
          window.removeEventListener('message', onIFrameCallback);
      }
  }

  setTimeout(postGetChromeExtensionStatusMessage, 100);
};

function postGetChromeExtensionStatusMessage() {
  if (!iframe) {
      loadIFrame(postGetChromeExtensionStatusMessage);
      return;
  }

  if (!iframe.isLoaded) {
      setTimeout(postGetChromeExtensionStatusMessage, 100);
      return;
  }

  iframe.contentWindow.postMessage({
      getChromeExtensionStatus: true
  }, '*');
}