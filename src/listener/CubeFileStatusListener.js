/*
 * 实现注册监听器。
 */
import * as CubeMessage from "../../static/lib/CubeMessage";
var CubeFileMessage=CubeMessage.Entity.File;
export class CubeFileStatusListener {
  constructor(vue) {
    this.vue = vue;
  }
  /**
  * 当文件开始上传时回调
  * @param file {FileInfo} - 开始上传的文件
  */
  onStarted(file) {
    console.log('文件开始上传', file)
    let param = {
      progress:0,
      status:'pending',
      cubeId: cube.accName,
      isSelf: true,
      type:'file',
      sn:file.identifier,
      file:file.file,
    };
    this.vue.$store.commit("updateFileUploadStatus",param)
    var isHave = false;
    this.vue.$store.state.messageList.length > 0 ? this.vue.$store.state.messageList.forEach((item)=>{
      if(item.sn == file.identifier){
        isHave = true;
      }
    }):'';
    if(!isHave){
      this.vue.$store.state.messageList.push({
        cubeId: cube.accName,
        isSelf: true,
        type:'file',
        sn:file.identifier,
        file:file.file,
        progress:0,
        status:'pending'
      });
    }
    
  }

  /**
   * 当收到文件进度时回调
   * @param file {FileInfo} - 收到进度信息的文件
   * @param processed {Number} - 已完成的字节数
   * @param total {Number} - 文件总字节数
   */
  onProgress(file, processed, total) {
    let param = {
      progress:parseFloat(processed/total).toFixed(2)*100,
      status:'pending',
      cubeId: cube.accName,
      isSelf: true,
      type:'file',
      sn:file.identifier,
      file:file.file,
    };

    this.vue.$store.commit("updateFileUploadStatus",param)
   }

  /**
   * 当文件上传完成时回调
   * @param file {FileInfo} - 上传完成的文件
   */
  onCompleted(file) { 
    let param = {
      progress:100,
      status:'complate',
      cubeId: cube.accName,
      isSelf: true,
      type:'file',
      sn:file.identifier,
      file:file.file,
    };
    this.vue.$store.commit("updateFileUploadStatus",param)
    if(this.vue.$store.state.sendCubeId){
      var receiver = this.vue.$store.state.sendCubeId;
      var entity = new CubeFileMessage(receiver);
      entity.file = file.file;
      entity.setHeader('blockFile','1')
        cube.getMessageService().sendMessage(receiver, entity);
    }
   
    console.log('当文件上传完成时回调',param)
  }

  /**
   * 当文件取消上传时完成
   * @param file {FileInfo} - 取消上传的文件
   */
  onCanceled(file) { 
    let param = {
      progress:100,
      status:'cancel',
      cubeId: cube.accName,
      isSelf: true,
      type:'file',
      sn:file.identifier,
      file:file.file,
    };
    this.vue.$store.commit("updateFileUploadStatus",param)
  }

  /**
   * 当文件暂停上传时完成
   * @param file {FileInfo} - 暂停上传的文件
   */
  onPause(file) { }

  /**
   * 当文件失败时回调
   * @param error {Object} - 错误信息
   */
  onFail(error) { }
}