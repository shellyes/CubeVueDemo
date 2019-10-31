
/*
 * 实现消息监听器。
 */
export class AppMessageListener {
    constructor(vue) {
		  this.vue = vue;
    }
/**
     * 当发送消息成功被回调。
     *
     * @param {MessageEntity} message - 消息对象实例。
     */
    onSent(message) {
    console.log(cube.accName,'发送消息',message);
    if(message.type == 'file') return false;
		var content = '',sender='',file={};
		sender = message.sender.displayName ? message.sender.displayName : message.sender.name
		if(message.type == 'text'){
			content = message.content;
		}else if(message.type == 'image'){
        file=message.file;
    }
		var param = {
      cubeId: sender,
      content: content,
      isSelf: cube.accName == message.sender.name ? true : false,
      type:message.type,
      sn:message.sn,
      file:file
    }
		this.vue.$store.state.messageList.push(param);
    }

    /**
     * 当接收到消息时被回调。
     *
     * @param messages 回执消息列表
     * @param from      发送回执设备
     */
    onReceived(message, from) {
		console.log('接收消息',message)
		var content = '',sender='',file={},status="";
		sender = message.sender.displayName ? message.sender.displayName : message.sender.name
		if(message.type == 'text'){
			content = message.content;
		}else if(message.type == 'file' || message.type == 'image'){
          file=message.file;
          status = 'complate';     
    }
		this.vue.$store.state.messageList.push({
			  cubeId: sender,
			  content: content,
			  isSelf: cube.accName == message.sender.name ? true : false,
			  type:message.type,
        sn:message.sn,
        file,
        status
			});
    }

    /**
     * 当接收到消息时被回调。
     *
     * @param lastMessage   一般为当前会话最后一条消息
     * @param from          发送回执设备
     */
    onReceiptedAll(lastMessage, from) {

    }

    /**
     * 当有消息被撤回时被回调。
     *
     * @param {MessageEntity} message - 被撤回消息的副本。
     */
    onRecalled(message) {
    }

    /**
     * 当有消息转发时被回调。
     *
     * @param {MessageEntity} message - 被转发消息的副本。
     * @param {Array.<MessageEntity>} successList - 转发成功的消息列表。
     * @param {Array.<MessageEntity>} unsuccessList - 转发识别的消息列表。
     */
    onForwarded(message, successList, unsuccessList) {
    }

    /**
     * 当有消息被回执时回调
     *
     * @param message {MessageEntity} - 被回执的消息对象
     */
    onReceipted(message) {
    }

    /**
     * 当文件消息上传进度变更时触发
     *
     * @param {FileMessage} message - 进度变更的消息对象
     * @param {Number} processed - 已经上传的字节数
     * @param {Number} total - 文件总大小
     */
    onUploading(message, processed, total) {
    }

    /**
     * 消息暂停
     *
     * @param {FileMessage} message - 消息对象
     */
    onPaused(message) {
    }

    /**
     * 消息恢复
     *
     * @param {FileMessage} message - 消息对象
     */
    onResumed(message) {
    }

    /**
     * 当文件消息上传完成时触发
     *
     * @param {FileMessage} message - 上传完成的消息对象
     */
    onUploadCompleted(message) {
    }

    /**
     * 开始同步消息
     *
     */
    onMessageSyncBegin() {
    }

    /**
     * 同步未拉取消息
     *
     * @param {Array} messageMap cube对应消息实体数组
     */
    onMessagesSyncing(messageMap) {
    }

    /**
     * 结束同步消息
     *
     */
    onMessageSyncEnd() {
    }

    /**
     * 消息置顶
     *
     */
    onConcatTop(concat) {
    }

    /**
     * 预测结果回调
     *
     * @param result
     */

    onPredictor(result) {

    }

    /**
     * 预测出错回调
     *
     * @param error
     */
    onPredictorFailed(error) {

    }

    /**
     * 联系人操作失败回调
     *
     */
    onContactFailed(error) {
    }


    /**
     * 在线文件传输失败通知
     * @param {type}  notOnline- 不在线  notSupportVersion -不支持版本 notSameIP- 不在同一局域网 unOnlineFile- 取消了发送或者接收 - 错误类型。
     * @param {message} [message] - 发生错误时的消息对象。
     */

    onLineFile(type, msg) {
    }

    /**
     * 当消息发生错误时被回调。
     *
     * @param {StateCode} errorCode - 错误码。
     * @param {MessageEntity} [message] - 发生错误时的消息对象。
     */
    onMessageFailed(errorCode, message) {
    }
}
