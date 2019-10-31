<template>
  <div class="ly-wrapper">
    <!-- 登录 -->
    <user-login @getAccountList="getAccountList"></user-login>
    <div class="create-whiteboard ly-content-box">
      <div class="login-title">群组列表</div>
      <el-button size="small" type="primary" plain @click="dialogFormVisible = true">创建群组</el-button>
      <div class="whiteboard-list mt10">
        <div class="whiteboard-box">
          <el-table :data="groupList" style="width: 100%" border>
            <el-table-column prop="displayName" label="群组"></el-table-column>
            <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <el-dialog title="创建群组" :visible.sync="dialogFormVisible">
      <el-form :model="group">
        <el-form-item label="群名称">
          <el-input v-model="displayName"></el-input>
        </el-form-item>
        <el-form-item label="群成员">
          <el-input placeholder="输入成员Cube号码, 用','号分开" v-model="members"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="createGroup">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import UserLogin from "../common/UserLogin";
import { AppGroupListener } from "../../listener/AppGroupListener";
import { AppAccountListener } from "../../listener/AppAccountListener";

export default {
  data: function() {
    return {
      sendCubeId: "",
      dialogFormVisible: false,
      members: [],
      displayName: "",
      groupList: [],
      group:{}
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
    createGroup() {
      var self = this;
      if(self.displayName.trim().length == 0){
        self.$message.error("请输入群名称");
        return false;
      }
      if(self.members.length == 0){
        self.$message.error("请输入群成员");
        return false;
      }
      //获取Cube群组服务
      var groupService = cube.getGroupService();
      var ret = groupService.createGroup(self.displayName, self.members.split(","));
      if (ret) {
        self.dialogFormVisible = false;
        console.log(ret);
        self.$message.success("创建成功");
      }
    },
    handleDelete(index,info){
      //获取Cube群组服务
            var groupService = cube.getGroupService();
            var ret = groupService.deleteGroup(info.name);
            if (ret) {
              this.$message("删除群组成功!");
            }
    }
  },
  watch: {
    "$store.state.groupList"(data) {
      this.groupList = data;
    }
  },
 mounted(){
if (
      cube.startup(err => {
        if (err) {
          console.log("引擎启动失败");
        } else {
          cube.getAccountService().addListener(new AppAccountListener(this)); 
          // 群组监听
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
.whiteboard-box {
  height: 100%;
}
</style>