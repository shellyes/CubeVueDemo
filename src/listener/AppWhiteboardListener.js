
/*
 * 实现消息监听器。
 */
export class AppWhiteboardListener {
    constructor(vue) {
		  this.vue = vue;
    }
      /**
     * 当白板就绪时被回调。
     *
     * @param {WhiteboardService} whiteboard - 白板服务实例。
     */
    onReady(whiteboard) { 
        console.log('当白板就绪时被回调。',whiteboard)
    }

    /**
     * 当分享白板时被回调。
     *
     * @param {WhiteboardService} whiteboard - 白板服务实例。
     * @param  from - 分享目标。
     */
    onShared(whiteboard, from) { 
        console.log('当分享白板时被回调。',whiteboard,from)

    }

    /**
     * 当接收到分享白板时被回调。
     *
     * @param {WhiteboardService} whiteboard - 白板服务实例。
     * @param from
     */
    onPassiveShared(whiteboard, from) { 
        console.log('当接收到分享白板时被回调。',whiteboard,from)

    }

    /**
     * 分享被取消时回调。
     *
     * @param {WhiteboardService} whiteboard - 白板服务实例。
     */
    onRevoked(whiteboard,from) { 
        console.log('分享被取消时回调。',whiteboard,from)
        
    }

    /**
     * 当文件正在上传和处理时回调。
     *
     * @param {WhiteboardService} whiteboard - 白板服务实例。
     * @param {WhiteboardFile} file - 白板文件对象。
     */
    onFileProgress(whiteboard, file) {
        console.log('当文件正在上传和处理时回调。',whiteboard,file)

     }

    /**
     * 当文件被分享时回调。
     *
     * @param {WhiteboardService} whiteboard - 白板服务实例。
     * @param {WhiteboardFile} file - 被分享的白板文件对象。
     */
    onFileShared(whiteboard, file) { 
        console.log('当文件被分享时回调。',whiteboard,file)

    }

    /**
     * 当白板内有幻灯片操作时回调。
     *
     * @param {WhiteboardService} whiteboard - 白板服务实例。
     * @param {SlideEntity} slide - 幻灯片实体。
     */
    onSlide(whiteboard, slide) {
        console.log('当白板内有幻灯片操作时回调。',whiteboard,slide)
        
     }

    /**
     * 当白板被清空时调用。
     *
     * @param {WhiteboardService} whiteboard - 白板服务实例。
     */
    onCleanup(whiteboard) { 
        console.log('当白板被清空时调用。',whiteboard)

    }

    /**
     * 当白板操作发生错误时回调。
     *
     * @param {WhiteboardService} whiteboard - 白板服务实例。
     * @param {CubeStateCode} errorCode - 错误码。
     */
    onFailed(whiteboard, errorCode) {
        console.log('当白板操作发生错误时回调。',whiteboard,errorCode)
        
     }

    /**
     *  创建白板成功
     * @param {Whiteboard} whiteboard
     */
    onCreate (whiteboard,domId) {
        console.log('创建白板成功',whiteboard,domId)
        var whiteBoarList = this.vue.$store.state.whiteBoarList;
        var param = {
            domId:domId,
            sn:whiteboard.whiteboardId,
            whiteboard:whiteboard,
        };
        param[whiteboard.whiteboardId] = whiteboard;
        whiteBoarList.push(param)
        this.vue.$store.commit("updateWhiteBoarList",whiteBoarList);
        console.log(whiteBoarList)
     }

    /**
     * 邀请白板回调
     * @param whiteboard
     * @param success{Array<String>}
     * @param failure {Array<String>}
     */
    onWhiteboardInviteResponded(whiteboard,success,failure) {
        console.log('邀请白板回调',success,failure)

     }

    /**
     * 被邀请者回调
     * @param whiteboard
     * @param from
     */
    onWhiteboardInvite(whiteboard,from){ 
        console.log('被邀请者回调',whiteboard,from)
        var whiteBoarList = this.vue.$store.state.whiteBoarList;
        var domIndex = this.vue.$store.state.domIndex;
        var domId = "wb_canvas_";
        domIndex = domIndex +1;
        domId = domId + domIndex;
        var param = {
            sn:whiteboard.whiteboardId,
            whiteboard:whiteboard,
            domId:domId 
        };
        param[whiteboard.whiteboardId] = whiteboard;
        whiteBoarList.push(param)
        this.vue.$store.commit("updateWhiteBoarList",whiteBoarList)
        this.vue.$store.state.CreateWhiteboardList.push(
            {
                domId,
                whiteboardId:whiteboard.whiteboardId
            }
        )
    }

    /**
     * 拒绝共享
     * @param whiteboard
     * @param from
     */
    onReject(whiteboard,from){ 
        console.log('拒绝共享',whiteboard,from)

    }

    /**
     * 删除白板
     * @param whiteboard
     */
    onRemove(whiteboard) {
        console.log('删除白板',whiteboard)

     }

    /**
     * 根据id查询白板回调
     * @param whiteboard
     */
    onQueryById(whiteboard){ 
        console.log('根据id查询白板回调',whiteboard)
        
    }
}
