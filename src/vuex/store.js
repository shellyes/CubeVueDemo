import Vue from 'vue'
import Vuex from "vuex"
import state from "./state"
// import {
//   post
// } from "@/config/http";
// const $Post = post;
// import $Action from "../config/api";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: state,
  getters: {

  },
  mutations: {
    updateMailListState(state, value) {
      state.isUpdateMailList = value;
    },
    updateJoined(state, value) {
      state.isJoined = value;
    },
    addRefreshMettingFn(state, value) {
      state.refreshMettingFn = value
    },
    updateConferenceState(state, value) {
      state.conferenceState = value;
    },
    /*文件的上传进度通知*/
    updateFileUploadStatus(state, value) {
      console.log(value, "文件的更新");
      state.fileUploadStatus = value;
    },
    /*收到文件上传通知*/
    updateFileUploadNotice(state, value) {
      state.fileUploadNotice = value;
    },
    updateLoginServer(state, value) {
      state.loginServer = value
    },
    updateMessageList(state, value) {
      state.messageList = value;
    },
    updateGroupList(state, value) {
      state.groupList = value;
    },
    updateVideoInfo(state, value) {
      state.videoInfo = value;
    },
    updateWhiteBoarList(state, value){
      state.whiteBoarList = value;
    },
    updateObjWbList(state, value){
      state.objWbList = value;
    },
    updateSendCubeId(state,value){
      state.sendCubeId = value;
    }
  },
  actions: {
    refreshMetting({ state }) {
      state.refreshMettingFn.call(Vue)
    },
    updateConferenceStateFn({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('updateConferenceState', payload);
        resolve();
      });
    },
    
  }
})
export default store;
