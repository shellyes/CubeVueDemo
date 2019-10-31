
/*
 * 实现注册监听器。
 */
export class AppGroupListener{
    constructor (vue) {
		this.vue = vue;
    }
    /**
     * 当有群组被创建且自己是其中成员时被调用。
     *
     * @param {GroupContext} groupContext - 群组上下文对象。
     * @param {String} customId - 自定义字段。
     */
    onGroupCreated(groupContext, customId) {
        console.log('当有群组被创建且自己是其中成员时被调用。',groupContext, customId)
        var param = {
            founder:groupContext.data.founder,
            displayName:groupContext.data.displayName,
            name:groupContext.data.name
          }
              this.vue.$store.state.groupList.push(param);
     }

    /**
     * 当有群组被删除且自己是其中成员时被调用。
     *
     * @param {GroupContext} groupContext - 群组上下文对象。
     */
    onGroupDeleted(groupContext) { 
        console.log('当有群组被删除且自己是其中成员时被调用。',groupContext)
        var groupList = this.vue.$store.state.groupList;
        for(var i=0; i< groupList.length;i++){
            if(groupList[i].name == groupContext.data.name){
                groupList.splice(i,1)
            }
        }
    }

    /**
     * 当自己所在的群组有新增成员时被调用。
     *
     * @param {GroupContext} groupContext - 群组上下文对象。
     * @param {Array.<String>} members - 新增后群组中所有成员的数组。
     * @param {Array.<String>} addedMembers - 本次新增的成员数组。
     */
    onMemberAdded(groupContext, members, addedMembers) { 
        console.log('当自己所在的群组有新增成员时被调用。',groupContext, members, addedMembers)

    }

    /**
     * 当自己所在的群组被删除时被调用。
     *
     * @param {GroupContext} groupContext - 群组上下文对象。
     * @param {Array.<String>} members - 删除后群组中所有成员的数组。
     * @param {Array.<String>} removedMembers - 被删除的成员数组。
     */
    onMemberRemoved(groupContext, members, removedMembers) {
        console.log('当自己所在的群组被删除时被调用。',groupContext, members, removedMembers)
        
     }

    /**
     * 当自己所在的群组有新增管理员时调用。
     *
     * @param {GroupContext} groupContext - 群组上下文对象。
     * @param {String} addedMaster - 新增的群组管理员 Cube 号
     */
    onMasterAdded (groupContext, addedMaster) {
        console.log('当自己所在的群组有新增管理员时调用。',groupContext, addedMaster)

     }

    /**
     * 当自己所在的群组有管理员被移除时调用。
     *
     * @param {GroupContext} groupContext - 群组上下文对象。
     * @param {String} removedMaster - 被移除的管理员 Cube 号
     */
    onMasterRemoved (groupContext, removedMaster) {
        console.log('当自己所在的群组有管理员被移除时调用。',groupContext, removedMaster)

     }

    /**
     * 当自己所在的群组昵称变更时调用。
     *
     * @param {GroupContext} groupContext - 群组上下文对象。
     */
    onGroupNameChanged (groupContext) { 
        console.log('当自己所在的群组昵称变更时调用。',groupContext)

    }
    
    /**
     * 当有错误时被调用。
     *
     * @param {StateCode} errorCode - 错误码。
     */
    onFailed(errorCode) { }
}