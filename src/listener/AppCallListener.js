
export class AppCallListener{
	constructor (vue) {
		this.vue = vue;
    }
    /**
     * 当发起新呼叫或者收到呼叫时被回调。
     *
     * @param {CubeCallDirection} direction - 指示呼叫时呼入还是呼出。
     * @param {Session} session - 当前引擎的会话。
     * @param {boolean} video - 是否启用了视频呼叫。
     */
    onNewCall(direction, session, video) {
        console.log('当发起新呼叫或者收到呼叫时被回调。',direction, session, video)
        this.vue.$store.state.videoCall = true;
        var param = {
            direction,
            session,
            video,
            type:'call'
        };
        this.vue.$store.commit("updateVideoInfo",param)
     }

    /**
     * 当呼叫正在处理时被回调。
	 *
     * @param {Session} session 呼叫会话
     */
    onInProgress(session) { 
        console.log('当呼叫正在处理时被回调。', session)

    }

    /**
     * 当对方振铃时被回调。
	 *
     * @param {Session} session - 当前引擎的会话。
     */
    onCallRinging(session) { 
        console.log('当对方振铃时被回调。', session)
        
        var param = {};
        param.session = session;
        param.type = 'ringing';
        param.video = this.vue.$store.state.videoInfo.video;
        param.direction = this.vue.$store.state.videoInfo.direction;
        this.vue.$store.commit("updateVideoInfo",param)

    }

    /**
     * 当呼叫已经接通时被回调。
     *
     * @param {Session} session - 当前引擎的会话。
     */
    onCallConnected(session) { 
        console.log('当呼叫已经接通时被回调。', session)
        var param = {};
        param.session = session;
        param.type = 'connected';
        param.video = this.vue.$store.state.videoInfo.video;
        param.direction = this.vue.$store.state.videoInfo.direction;
        this.vue.$store.commit("updateVideoInfo",param)
    }

    /**
     * 当视频流画面接通时
     * @param session {CubeSession} 呼叫会话
     */
    onCallAddFrame(session) {
        console.log('当视频流画面接通时', session)

    }

    /**
     * 当视频流接通时
     * @param session {CubeSession} 呼叫会话
     */
    onCallAddStream(sessoin){
        console.log('当视频流接通时', session)

    }

	onCallHold(session) { 
        console.log('当视频流接通时2', session)

    }

    /**
     * 当呼叫结束时被回调。
	 *
     * @param {Session} session - 当前引擎的会话。
     * @param {String} action - 结束方式。
     * @param {Object} state -- 响应状态。
     */
    onCallEnded(session, action, state) {
        console.log('当呼叫结束时被回调。', session, action, state)
        this.vue.$store.state.videoCall = false;
     }

    /**
     * 当呼叫发生错误时被回调。
     *
     * @param {Session} session - 当前引擎的会话。
     * @param {StateCode} errorCode - 错误码。
     */
    onCallFailed(session, errorCode) {
        console.log('当呼叫发生错误时被回调。', session, errorCode)
        var param = {};
        param.session = session;
        param.type = 'failed';
        param.video = this.vue.$store.state.videoInfo.video;
        param.direction = this.vue.$store.state.videoInfo.direction;
        param.errorCode = errorCode;
        this.vue.$store.commit("updateVideoInfo",param)
     }

    /**
     * 呼叫反转
     * @param session
     */
    onReverseCall(session) { 
        console.log('呼叫反转', session)

    }
}