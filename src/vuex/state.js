const state = {
  conferenceState: {},
  isUpdateMailList:true,
  isJoined:false,
  isEngineLogin:"",
  refreshMettingFn:null,
  getConferencesListIsOk:true,
  //参会人员流
  conferenceStreams:[],
  //上传文件的状态
  fileUploadStatus:{},
//  收到文件上传的消息的通知
  fileUploadNotice:{},
  loginServer:'https://test-user.shixincube.cn/',
  messageList:[],
  groupList:[],
  licenseServer:'http://103.6.222.234:9000/auth/license/get',
  videoCall:false,
  videoInfo:{},
  whiteBoarList:[],
  objWbList:{},
  domIndex:1,
  CreateWhiteboardList:[],
  sendCubeId:''
};
export default state;
