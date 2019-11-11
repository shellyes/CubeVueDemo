<template>
  <div class="ly-wrapper">
    <!-- 登录 -->
    <el-row :gutter="10">
      <el-col :span="8">
        <!-- 登录 -->
        <user-login @getAccountList="getAccountList"></user-login>
        <div class="create-whiteboard ly-content-box">
          <el-input class="mb20" placeholder="请输入白板名称" v-model="whiteName">
            <el-button
              slot="append"
              size="small"
              type="primary"
              plain
              @click="createWhiteBoard"
            >创建白板</el-button>
          </el-input>
          <div class="whiteboard-list">
            <div
              class="whiteboardItem flex flex-pac"
              v-for="item,index in whiteBoarListHandle"
              :key="index"
            >
              <div class="flex-f1" @click="changeActive(index)">新建白板{{index+1}}</div>
              <span class="deleteIcon" @click="delWhiteBoard(index,item.sn)">x</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="whiteboard-box">
          <div class="tx-c login-status fz14">{{whiteBoarStatusText}}</div>
          <div class="tx-c mb10">{{wbName}}</div>
          <div
            :class="wbActive == index ? 'active' : '' "
            class="wb-from"
            v-for="item,index in whiteBoarListHandle"
            :key="index"
          >
            <div>
              <div class="mtb10 flex">
                <el-input v-model="member" class="mr10" placeholder="请输入对方cubeId"></el-input>
                <el-button :disabled="!isShare" class="mb10" size="small" type="success" plain @click="invite(item.sn)">邀请</el-button>
                <el-button :disabled="!isShare" class="mb10" size="small" type="danger" plain  @click="reject(item.sn)">拒绝</el-button>
              </div>
              <el-button
                :disabled="isShare"
                class="mb10"
                size="small"
                type="primary"
                plain
                @click="share(item.sn)"
              >分享</el-button>
              <el-button
                v-if="isShare"
                class="mb10"
                size="small"
                type="primary"
                plain
                @click="share(item.sn)"
              >停止</el-button>

              <el-button class="mb10" size="small" type="primary" plain @click="resetView(item.sn)">复位</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="exportContent(item.sn)">导出</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="importContent(item.sn)">导入</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="getRecorder(item.sn)">录制</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="getPlayer(item.sn)">回放</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="pause">暂停</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="resume">恢复</el-button>
              <!-- <el-button class="mb10" size="small" type="primary" plain>文件</el-button>
              <el-button class="mb10" size="small" type="primary" plain>回档</el-button> -->
              <el-button class="mb10" size="small" type="primary" plain @click="rect(item.sn)">方框</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="ellipse(item.sn)">圆圈</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="arrow(item.sn)">箭头</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="pencil(item.sn)">铅笔</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="text(item.sn)">文本</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="wbUndo(item.sn)">撤销</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="wbRedo(item.sn)">重做</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="wbErase(item.sn)">擦除</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="wbClean(item.sn)">清空</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="wbNozoom(item.sn)">原尺寸</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="wbZoomin(item.sn)">放大</el-button>
              <el-button class="mb10" size="small" type="primary" plain @click="wbZoomout(item.sn)">缩小</el-button>
            </div>
            <div :id="item.domId" class="svg-window"></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserLogin from "../common/UserLogin";
import * as CubeWhiteboard from "../../../static/lib/CubeWhiteboard";
import "../../../static/lib/raphael";

import { AppAccountListener } from "../../listener/AppAccountListener";
import { AppWhiteboardListener } from "../../listener/AppWhiteboardListener";
let appInfo = require(`${__dirname}/../../../appInfo`)

export default {
  data: function() {
    return {
      sendCubeId: "",
      whiteName: "",
      isHaveWhiteBoard: false,
      domId: "wb_canvas_",
      domIndex: 1,
      whiteBoarListHandle: [],
      whiteBoarStatusText: "登录后输入用户名即可进行通话、消息和白板",
      wbActive: -1,
      wbName: "",
      objWbList: {},
      member: "",
      isShare: false,
      wbExportData: null,
      wbRecordingData: null,
      wbPlayer:null,
      CreateWhiteboardList:[],//白板列表
      whiteboardId:'',//当前的白板ID
    };
  },
  components: {
    UserLogin
  },
  methods: {
    //分享
    share(sn) {
      this.whiteboardId = sn;
      var whiteboard = this.objWbList[sn];
      if (whiteboard.whiteboardId.length < 4) {
        this.$message("请输入正确的用户名");
        return;
      }
      cube.getWhiteboardService().setOffline(false);

      var wb = cube.getWhiteboardService();
      // 将白板分享给指定的用户
      if (wb.isSharing(whiteboard.whiteboardId)) {
        // 停止分享
        wb.revokeSharing(whiteboard.whiteboardId);
      } else {
        wb.shareWith(whiteboard.whiteboardId);
      }
      this.isShare = !this.isShare;
    },
    //邀请
    invite(sn) {
      if (this.member == "" && isNaN(parseInt(this.member))) {
        this.$message("邀请人为空或不存在");
      }
      var whiteboard = this.objWbList[sn];
      var cubeId = this.member.split(",");
      for (let i = 0; i < cubeId.length; i++) {
        if (cubeId[i].length < 4) {
          this.$message("请输入长度大于4的有效cube号");
          return;
        }
      }
      var wb = cube.getWhiteboardService();
      wb.inviteWhiteboard(whiteboard.whiteboardId, cubeId);
    },
    //拒绝
    reject(sn) {
      var whiteboard = this.objWbList[sn];
      var wb = cube.getWhiteboardService();
      wb.rejectWhiteboard(whiteboard.whiteboardId);
    },
    //复位
    resetView(sn) {
      var whiteboard = this.objWbList[sn];
      var wb = cube.getWhiteboardService();
      wb.resetView(whiteboard);
    },
    //导出
    exportContent(sn) {
      var whiteboard = this.objWbList[sn];
      var wb = cube.getWhiteboardService();
      var data = wb.exportContent(whiteboard);
      this.wbExportData = JSON.stringify(data);
      console.log("白板导出", this.wbExportData);
    },
    // 白板导入
    importContent(sn) {
      var whiteboard = this.objWbList[sn];
      if (null == this.wbExportData) {
        this.$message("无可导入数据");
        return;
      }
      var wb = cube.getWhiteboardService();
      wb.importContent(whiteboard, JSON.parse(this.wbExportData));
    },
    // 白板录制
    getRecorder(sn) {
      var whiteboard = this.objWbList[sn];
      var wb = cube.getWhiteboardService();
      var recorder = wb.getRecorder(whiteboard);
      if (recorder.isRecording()) {
        this.$confirm("是否结束白板录制？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            recorder.stopRecording();
            this.wbRecordingData = recorder.exportData();
            this.wbRecordingData = JSON.stringify(this.wbRecordingData);
            console.log("Recording data: " + this.wbRecordingData);
          })
          .catch(() => {});
      } else {
        this.$confirm("是否开始录制白板？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.wbRecordingData = null;

            // 设置监听器
            recorder.setListener({
              onStarted: function(player) {
                console.log("--- 录制开始 ---");
              },

              onStopped: function(player) {
                console.log("--- 录制结束 ---");
              },
              onPaused: function(player) {
                console.log("--- 录制暂停 ---");
              },
              onResumed: function(player) {
                console.log("--- 录制继续 ---");
              }
            });
            if (!recorder.startRecording()) {
              this.$message("录制白板错误");
            }
          })
          .catch(() => {});
      }
    },
    // 白板回放
    getPlayer(sn) {
      var whiteboard = this.objWbList[sn];
      var wb = cube.getWhiteboardService();
      var player = wb.getPlayer(whiteboard);
      if (player.isPlaying()) {
        this.$confirm("是否结束回放？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
            player.stop();
          }).catch(() => {});
      } else {
        if (null == this.wbRecordingData) {
          this.$message("请先录制数据");
          return;
        }

        player.importData(JSON.parse(this.wbRecordingData));

        // 设置监听器
        player.setListener({
          onStarted: function(player) {
            console.log("*** 开始播放 ***");
          },

          onStopped: function(player) {
            console.log("*** 停止播放 ***");
            $(".btn-wb-action-pause").attr("disabled");
            $(".btn-wb-action-resume").attr("disabled");
          },

          onPaused: function(player) {
            console.log("*** 暂停播放 ***");
          },

          onResumed: function(player) {
            console.log("*** 恢复播放 ***");
          }
        });
        this.$confirm("是否回放白板？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
            if (!player.play()) {
              this.$message("回放白板失败");
            }
          })
          .catch(() => {});
      }
      this.wbPlayer = player;
    },
    //暂停播放
    pause() {
      this.wbPlayer.pause();
    },
    //继续播放
    resume() {
      this.wbPlayer.resume();
    },
    // 白板铅笔工具
    pencil(sn){
      var whiteboard = this.objWbList[sn];
        // var checked = !$(this).hasClass('active');
        // if (checked) {
            var pencil = new PencilEntity();
            cube.getWhiteboardService().selectEntity(whiteboard, pencil);
        // }
        // else {
        //     window.cube.getWhiteboardService().unselect(whiteboard);
        // }
    },
    //箭头
    arrow(sn){
        var whiteboard = this.objWbList[sn];

        // var checked = !$(this).hasClass('active');
        // if (checked) {
            var arrow = new ArrowEntity();
            cube.getWhiteboardService().selectEntity(whiteboard, arrow);
            // switchTool($(this));
        // }
        // else {
        //     window.cube.getWhiteboardService().unselect(wb);
        // }
    },
    //文本工具
    text(sn){
       var whiteboard = this.objWbList[sn];

        // var checked = !$(this).hasClass('active');
        // if (checked) {
            var text = new TextEntity();
            cube.getWhiteboardService().selectEntity(whiteboard, text);
            // switchTool($(this));
        // }
        // else {
        //     window.cube.getWhiteboardService().unselect(wb);
        // }
    },
    //方框
    rect(sn){
      var whiteboard = this.objWbList[sn];

      // var checked = !$(this).hasClass('active');
        // if (checked) {
            var rect = new RectEntity();
            cube.getWhiteboardService().selectEntity(whiteboard, rect);
            // switchTool($(this));
        // }
        // else {
        //     window.cube.getWhiteboardService().unselect(wb);
        // }
    },
    //圆圈
    ellipse(sn){
      var whiteboard = this.objWbList[sn];

      // var checked = !$(this).hasClass('active');
        // if (checked) {
            var ellipse = new EllipseEntity();
            cube.getWhiteboardService().selectEntity(whiteboard, ellipse);
            // switchTool($(this));
        // }
        // else {
        //     window.cube.getWhiteboardService().unselect(wb);
        // }
    },
    //白板撤销
    wbUndo(sn){
      var whiteboard = this.objWbList[sn];
        window.cube.getWhiteboardService().undo(whiteboard);
    },
    //白板撤销
    wbRedo(sn){
      var whiteboard = this.objWbList[sn];
        window.cube.getWhiteboardService().redo(whiteboard);
    },
    //白板擦除笔记
    wbErase(sn){
      var whiteboard = this.objWbList[sn];
        window.cube.getWhiteboardService().erase(whiteboard);
    },
    //白板清空
    wbClean(sn){
      var whiteboard = this.objWbList[sn];
        window.cube.getWhiteboardService().cleanup(whiteboard);
    },
    //白板原尺寸
    wbNozoom(sn){
      var whiteboard = this.objWbList[sn];
        window.cube.getWhiteboardService().zoom(whiteboard,0.6);
    },
    //白板放大
    wbZoomin(sn){
      var whiteboard = this.objWbList[sn];
       var wb = window.cube.getWhiteboardService();
        var cr = wb.getZoomRatio(whiteboard);
        if (cr >= 5.0) {
            return;
        }

        cr += 0.2;
        if (cr > 5.0) {
            cr = 5.0;
        }

        wb.zoom(whiteboard, cr);
    },
    //白板缩小
    wbZoomout(sn){
      var whiteboard = this.objWbList[sn];
       var wb = window.cube.getWhiteboardService();
        var cr = wb.getZoomRatio(whiteboard);
        if (cr <= 0.2) {
            return;
        }

        cr -= 0.2;
        if (cr < 0.2) {
            cr = 0.2;
        }

        wb.zoom(whiteboard, cr);
    },
    changeActive(index) {
      this.wbActive = index;
      this.wbName = "新建白板" + (index + 1);
    },
    getAccountList(accountInfo) {
      this.sendCubeId = accountInfo[1].cubeId;
    },
    //创建白板
    createWhiteBoard() {
      var self = this;
      var name = self.whiteName;
      let a = /^[\u4e00-\u9fa5a-zA-Z0-9]*$/;
      if (a.test(name)) {
        
        self.domIndex++;
        self.$store.state.domIndex = self.domIndex;
        var domId = self.domId + self.domIndex;
        // self.isHaveWhiteBoard=true;
        // self.domId = domId;
        var whiteBoardItem = {
          domId: domId
        };
        self.whiteBoarListHandle.push(whiteBoardItem);
        this.$store.state.CreateWhiteboardList.push(
          {
            domId:domId,
            name:name
          }
        )
      } else {
        showAlert("白板名称为空或含有特殊字符！");
      }
    },
    delWhiteBoard(val, id) {
      var self = this;
      self.whiteBoarListHandle.forEach((item, index) => {
        if (val == index) {
          self.whiteBoarListHandle.splice(index, 1);
        }
      });
      cube.getWhiteboardService().removeWhiteboard(id);
    },
    openWb(id) {}
  },
  mounted() {
    if (
      cube.startup(err => {
        if (err) {
          console.log("引擎启动失败");
        } else {
          //设置资源目录
          // cube.setResourcePath("./static/sounds");
          // 加载白板模块
          cube.loadWhiteboard(CubeWhiteboard.ServiceWorker);
          cube.getAccountService().addListener(new AppAccountListener(this));
          // 白板监听
          cube
            .getWhiteboardService()
            .addListener(new AppWhiteboardListener(this));
          cube.getWhiteboardService().setOffline(false);
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
  },
  updated(){
    if(this.CreateWhiteboardList && this.CreateWhiteboardList.length > 0){
      this.CreateWhiteboardList.forEach((item,index)=>{
        cube.getWhiteboardService().createWhiteboard(item.domId, item.name, item.whiteboardId);
        this.CreateWhiteboardList.splice(index,1)
      })
    }
  },
  watch: {
    "$store.state.CreateWhiteboardList"(data) {
      this.CreateWhiteboardList = data;
    },
    "$store.state.whiteBoarList"(data) {
      var self = this;
      self.whiteBoarListHandle=[];
      var wbAction = false;
      // this.whiteBoarListHandle = data;
      data.forEach(item => {
        if(item.sn){
            self.objWbList[item.sn] = item[item.sn];
            if(self.whiteBoarListHandle.length > 0){
              self.whiteBoarListHandle.forEach((wb)=>{
                if(wb.sn != item.sn){
                    wbAction=true;
                }
              })
            }else{
              self.whiteBoarListHandle.push(item);
            }
            
        }
        if(wbAction){
            self.whiteBoarListHandle.push(item);
        }
        
        
      });
      console.log("objWbList1111111", self.objWbList);
    }
  },

  created: function() {
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
.whiteboard-box {
  height: 100%;
}
.whiteboardItem {
  background-color: #d9edf7;
  text-align: center;
  margin-top: 10px;
  color: #31708f;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
}
.deleteIcon {
  display: inline-block;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  color: #e23d3d;
}
.svg-window {
  height: 580px;
  margin: 5px;
  border: 1px solid #bce8f1;
  position: relative;
}
.svg-window-replace{
   height: 580px;
  margin: 5px;
  border: 1px solid #bce8f1;
  position: relative;
  /* opacity: 0;
  pointer-events: none; */
}
.wb-from {
  width: auto;
  height: 775px;
  border-top: 1px solid #d8dfea;
  display: none;
}
.wb-from.active {
  display: block;
}
</style>