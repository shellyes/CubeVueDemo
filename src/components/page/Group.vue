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
            <el-table-column  label="群组">
              <template slot-scope='scope'>
                <div @click="handleGroupMenbers(scope.row)" class="pointer">{{scope.row.displayName}}</div>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="addMenbersVisible(scope.row)">添加群成员</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <el-dialog title="创建群组" :visible.sync="dialogFormVisible">
      <el-form :model="group">
        <el-form-item label="群名称">
          <el-input placeholder="输入群名称" v-model="displayName"></el-input>
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
    <el-dialog title="添加群成员" :visible.sync="dialogAddMenbers">
      <el-form :model="group">
        <el-form-item label="群成员">
          <el-input placeholder="输入成员Cube号码, 用','号分开" v-model="addMembers"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddMenbers = false">取 消</el-button>
        <el-button type="primary" @click="handleAddMenbers">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="群成员" :visible.sync="dialogGroupMenbers">
      <el-table :data="groupMenbers" style="width: 100%" border>
        <el-table-column label="群成员">
          <template slot-scope='scope'>
                <div>{{scope.row}}</div>
              </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleGroupMenbersDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogGroupMenbers = false">取 消</el-button>
        <el-button type="primary" @click="handleAddMenbers">确 定</el-button>
      </div> -->
    </el-dialog>
  </div>
</template>

<script>
import UserLogin from "../common/UserLogin";
import { AppGroupListener } from "../../listener/AppGroupListener";
import { AppAccountListener } from "../../listener/AppAccountListener";
let appInfo = require(`${__dirname}/../../../appInfo`)

export default {
  data: function() {
    return {
      sendCubeId: "",
      dialogFormVisible: false,
      members: "",
      displayName: "",
      groupList: [],
      group: {},
      addMembers: "",
      dialogAddMenbers: false,
      groupId: "",
      dialogGroupMenbers: false,
      groupMenbers:[]
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
    //创建群组
    createGroup() {
      var self = this;
      if (self.displayName.trim().length == 0) {
        self.$message.error("请输入群名称");
        return false;
      }
      if (self.members.length == 0) {
        self.$message.error("请输入群成员");
        return false;
      }
      //获取Cube群组服务
      var groupService = cube.getGroupService();
      var ret = groupService.createGroup(
        self.displayName,
        self.members.split(",")
      );
      if (ret) {
        self.dialogFormVisible = false;
        self.$message.success("创建成功");
      }
    },
    handleGroupMenbers(info){
      this.groupMenbers = info.members;
      this.groupId = info.name;
      this.dialogGroupMenbers = true
    },
    //删除群成员
    handleGroupMenbersDelete(info){
      console.log(this.groupId,info)
            var groupService = window.cube.getGroupService();
            var ret = groupService.removeMembers(this.groupId, [info]);
            if (ret) {
               this.$message.success("删除成员成功!");
               this.dialogGroupMenbers = false;
            }
    },
    addMenbersVisible(info) {
      this.dialogAddMenbers = true;
      this.groupId = info.name;
    },
    //添加群成员
    handleAddMenbers(index, info) {
      var self = this;
      console.log(info);
      if (self.addMembers.length == 0) {
        self.$message.error("请输入群成员");
        return false;
      }
      //获取Cube群组服务
      var groupService = cube.getGroupService();
      var ret = groupService.addMembers(
        self.groupId,
        self.addMembers.split(",")
      );
      if (ret) {
        self.dialogAddMenbers = false;
        self.$message.success("添加成功");
      }
    },
    //删除群组
    handleDelete(index, info) {
      //获取Cube群组服务
      var groupService = cube.getGroupService();
      var ret = groupService.deleteGroup(info.name);
      if (ret) {
        this.$message("删除群组成功!");
      }
    }
  },
  watch: {
    "$store.state.isEngineLogin"(data) {
      var self = this;
      if (data == "success") {
        //注册成功查询群组
        window.cube.getGroupService().queryGroups(
          function(groupEntity) {
            var paramList = [];
            for (var i = 0; i < groupEntity.list.length; i++) {
              var param = {
                founder: groupEntity.list[i].founder,
                displayName: groupEntity.list[i].displayName,
                name: groupEntity.list[i].name,
                members:groupEntity.list[i].members
              };
              if(groupEntity.list[i].members.length > 0 && groupEntity.list[i].members.indexOf(cube.accName)>-1){
              paramList.push(param);
            }else{
              paramList = self.$store.state.groupList;
            }
              self.$store.state.groupList = paramList;
            }
          },
          function() {
            self.$message.error("查询群组失败!");
          }
        );
      }
    },
    "$store.state.groupList"(data) {
      this.groupList = data;
    }
  },
  mounted() {
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
      let appId = appInfo.appId;
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
.pointer{
  cursor: pointer;
}
</style>