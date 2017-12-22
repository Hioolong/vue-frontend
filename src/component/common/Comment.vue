<template>
    <div class="comment-box">
        <!--取得评论总数-->
        <form id="commentForm" name="commentForm" class="form-box" @submit.prevent="postComment">
            <div class="avatar-box">
                <i class="iconfont icon-user-full"></i>
            </div>
            <div class="conn-box">
                <div class="editor">
                    <textarea id="txtContent" name="txtContent" v-model="commentContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                    <span class="Validform_checktip"></span>
                </div>
                <div class="subcon">
                    <button id="btnSubmit" name="submit"  class="submit" >提交评论</button>
                    <span class="Validform_checktip"></span>
                </div>
            </div>
        </form>
        <ul id="commentList" class="list-box">
            <p v-if="commentList.length==0" style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
            <li v-for="item in commentList" :key="item.id">
                <div class="avatar-box">
                    <i class="iconfont icon-user-full"></i>
                </div>
                <div class="inner-box">
                    <div class="info">
                        <span>{{ item.user_name }}</span>
                        <span>{{ item.add_time | date }}</span>
                    </div>
                    <p>{{ item.content }}</p>
                </div>
            </li>
        </ul>
        <!--放置页码-->
        <div class="page-box" style="margin:5px 0 0 62px">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                
                :page-size="commentData.pageSize"
                layout="total, prev, pager, next"
                :total="commentData.totalcount">
            </el-pagination>
        </div>
        <!--/放置页码-->
    </div>
</template>

<script>
export default {
    props:['tablename','artid'],
    data() {
        return {
            query: {
                pageIndex:1,
                pageSize:10
            },
            commentList:[],
            commentData:{},
            // 关联评论输入框内容
            commentContent:''
        }
    },
    methods: {
        getComments() {
            // 获取评论
            this.$http.get(this.$api.commentList+this.tablename+'/'+this.artid,{params:this.query})
                .then(res => {
                    console.log(res.data);
                    this.commentList = res.data.message;
                    this.commentData = res.data;
                })
        },
        postComment(){
            // 提交评论
            this.$http.post(this.$api.comment + this.tablename + '/' + this.artid,{commenttxt:this.commentContent})
                .then(res => {
                    if(res.data.status==0){
                        this.$message({message:'恭喜你，评论成功',type:'success'});
                    }else{
                        this.$message({message:'评论失败，请检查您的网络',type:'error'});
                    };
                    this.commentList.unshift({
                        user_name:'匿名用户',
                        user_ip:'127.0.0.1',
                        add_time:new Date(),
                        content:this.commentContent
                    });
                    this.commentContent = '';
                })
        },
        handleSizeChange(val){
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val){
            // console.log(`当前页: ${val}`);
            this.query.pageIndex = val;
            this.getComments();
        }
    },
    created(){
        this.getComments();
    }
};
</script>

<style scoped>

</style>