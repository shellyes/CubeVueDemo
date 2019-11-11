<template>
  <div class="ly-wrapper">
    <img class="cube-logo" src="../../assets/logo120.png" alt />
    <div class="demoBox">
      <el-button class="demoitem" type="primary" @click="goToDemo('message')">消息Demo</el-button>
    </div>
    <div>
      <el-button class="demoitem" type="primary" @click="goToDemo('call')">音视频Demo</el-button>
    </div>
    <div>
      <el-button class="demoitem" type="primary" @click="goToDemo('whiteboard')">白板Demo</el-button>
    </div>
    <div>
      <el-button class="demoitem" type="primary" @click="goToDemo('group')">群组Demo</el-button>
    </div>
    <div>
      <el-button class="demoitem" type="primary" @click="goToDemo('file')">文件管理Demo</el-button>
    </div>
    <div>
      <el-button class="demoitem" type="primary" @click="goToDemo('confrence')">音视频会议Demo</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    goToDemo(name) {
      console.log(name);
      this.$router.replace("/" + name);
    }
  }
};
</script>
<style scoped>
.demoBox{
  width: 360px;
  margin: 0 auto;
}
.demoitem {
  display: block;
  width: 360px;
  margin: 30px auto;
  font-size: 16px;
  padding: 15px 30px;
}
.cube-logo {
  display: block;
  margin: 0 auto 40px;
}
.mt80 {
  margin-top: 80px;
}
</style>