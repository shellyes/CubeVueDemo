export class AppFileManagerListener{
  constructor(vue) {
    this.vue = vue;
    this.lastTime = 0;
    this.lastProcessed = 0;
  }

  /**
     * 当有文件新增时回调
     * @param files {Array<FileInfo>} 新增的文件信息
     * @param parentFile {FileInfo} 父目录信息
     */
    onFileAdded(file, parentFile) {
      this.vue.$store.state.fileList.push({
        cubeId: cube.accName,
        // isSelf: true,
        type:'file',
        sn:file.identifier,
        file:file.file,
        progress:0,
        // status:'pending'
      });
     }

    /**
     * 当有文件被删除时回调
     * @param files {Array<FileInfo>} 被删除的文件信息
     * @param parentFile {FileInfo} 父目录信息
     */
    onFileDeleted(files, parentFile) { }

    /**
     * 当有文件被移动时回调
     * @param file {FileInfo} 被移动的文件
     * @param parentFile {FileInfo} 移动文件所在的新目录
     */
    onFileMove(file, parentFile) { }

    /**
     * 当有文件重命名时回调
     * @param file {FileInfo} 被重命名的文件
     * @param newFile {FileInfo} 重命名后的文件
     */
    onFileRename(file, newFile) { }

    /**
     * 文件错误回调
     * @param error {Object} 错误信息
     */
    onError(error) { }

     /**
     * 当文件开始上传时回调
     * @param file {FileInfo} - 开始上传的文件
     */
    onStarted(file) { }

    /**
     * 当收到文件进度时回调
     * @param file {FileInfo} - 收到进度信息的文件
     * @param processed {Number} - 已完成的字节数
     * @param total {Number} - 文件总字节数
     */
    onProgress(file, processed, total) { }

    /**
     * 当文件上传完成时回调
     * @param file {FileInfo} - 上传完成的文件
     */
    onCompleted(file) { }
    /**
     * 当文件取消上传时完成
     * @param file {FileInfo} - 取消上传的文件
     */
    onCanceled(file) { }
};
