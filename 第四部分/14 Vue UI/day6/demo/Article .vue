<template>
    <div class="article">
        <!-- 顶部导航开始 -->
        <header>
            <mt-header title="学前端，上学问">
                <router-link slot="left" to="/">
                    <mt-button  icon="back"></mt-button>
                </router-link>
            </mt-header>
        </header>
        <!-- 导航导航结束 -->
        <!-- 正文区域开始 -->
        <div class="question">
            <!-- 标题开始 -->
            <div class="question-header">
                <div class="question-header-title">
                   {{article.subject}}
                </div>
                <div class="question-header-datetime">
                   {{moment.unix(article.created_at).format('Y年MM月DD日HH:mm:ss')}}
                </div>
            </div>
            <!-- 标题结束 -->
            <!-- 作者信息开始 -->
            <div class="author-info">
                <img :src="article.avatar" class="author-info-avatar">
                <div class="author-info-detail">
                    <div class="author-info-nickname">{{article.nickname}}</div>
                    <div class="author-info-badge">
                        共<mt-badge type="primary" size="small">{{article.article_number}}</mt-badge>篇
                    </div>
                </div>
                
            </div>
            <!-- 作者信息结束 -->
            <!-- 内容开始 -->
            <div class="question-content">
                <div class="rich-content" v-html="article.content">                    
                </div>
            </div>
            <!-- 内容结束 -->
            <!-- 评论区域开始 -->
            <div class="comment-container">
                <!-- 单一评论区域开始 -->
                <div class="comment-item" v-for="(comment,index) of comments" :key="index">
                    <div class="user_avatar">
                        <img :src="require(`../assets/images/avatar/${comment.avatar}`)" alt="">
                        <span>{{comment.username}}</span>
                    </div>
                    <div class="comment-content">
                        {{comment.content}}
                        <div>{{moment.unix(comment.created_at).format('Y-MM-DD HH:mm')}}</div>
                    </div>
                </div>               
                <!-- 单一评论区域结束 -->
            </div>
            <!-- 评论区域结束 -->
        </div>
    </div>
</template>
<style scoped>
.article{
    background: #f6f6f6;
    height: 100vh;
}
.question-header{
    margin-bottom: 5px;
    padding: 10px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
}
.question-header-title {
    font-size: 18px;
    color: #1a1a1a;
    line-height: 1.5;
}
.question-header-datetime{
    margin-top:5px;
    font-size:14px;
    color:#646464;
}
.author-info{
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding: 8px 10px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    
}
.author-info-avatar{
    width:40px;
    height: 40px;
    border-radius: 100%;
}
.author-info-detail{
    margin-left:15px;
}
.author-info-nickname{
    font-size: 15px;
    margin-bottom:6px;
}
.author-info-badge{
    font-size: 14px;
}
.question-content {
    padding: 10px;
    background-color:#fff;
}
/*******************************************/
.comment-container{
	margin-top:20px;
}
.comment-item{
	display:flex;
	align-items:top;
    margin-bottom: 10px;
}
.user_avatar{
	width:40px;
	margin:0 10px;
}
.user_avatar img{
    display:block;
	width:40px;
	height:40px;
    margin-bottom:5px;
	border-radius:100%;
}
.user_avatar span{
    font-size:12px;
    display: block;
    text-align: center;
}
.comment-content{
	font-size:14px;
    line-height: 1.5em;
}
/*******************************************/
</style>
<style>
.rich-content p{
    padding: 5px 0;
    line-height: 1.7;
    
}
.rich-content img{
    max-width:100%;
}
</style>
<script>
export default {
    data(){
        return {
            //存储文章信息
            article:{},
            //存储评论信息
            comments:[]
        }
    },
    mounted(){        
       //获取地址栏中的参数
       let id = this.$route.params.id;
       //向服务器发送请求以获取指定ID的文章信息
       this.axios.get('/review',{
           params:{
               id:id
           }
       }).then(res=>{
            this.article = res.data.result;
            this.article.avatar = require('../assets/images/avatar/' + res.data.result.avatar);            
       });
       //向服务器发送请求以获取指定ID文章的评论信息
       this.axios.get('/comments',{
           params:{
               id:id
           }
       }).then(res=>{
            this.comments = res.data.results;
       });  
    }
}
</script>
