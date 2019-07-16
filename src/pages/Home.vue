<template>
    <div class="home-wrap">
            <el-button type="primary" @click="$router.push('/write')">新建</el-button>
            <el-table
            :data="posts"
            stripe
            style="width: 100%">
            <el-table-column
            prop="title"
            label="标题"
            width="280">
             <template slot-scope="scope">
                    <p class="ep">{{scope.row.title}}</p>
                </template>
            </el-table-column>
            <el-table-column
            prop="content"
            label="内容"
            width="280">
                <template slot-scope="scope">
                    <p class="ep">{{scope.row.content}}</p>
                </template>
            </el-table-column>
            <el-table-column
            prop="ctime"
            label="创作时间">
            </el-table-column>
            <el-table-column label="操作">
                 <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                 </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getPost , delPost } from "../api/post"
export default {
    name:'home',
    data(){
        return {
        posts: [
                {
                    title: '2016-05-02',
                    ctime: '王小虎',
                    content: '上海市普陀区金沙江路 1518 弄'
                }
            ],
        page:1,
        pageSize:10
        }
    },
    mounted(){
        this.getList()
    },

    methods:{
        getList(){
            let { page , pageSize } = this;
            getPost({page,pageSize}).then(res=>{
                this.posts = res.data ; 
            })
        },
        handleDelete(index){
            delPost({id:this.posts[index]._id}).then(res=>{
                this.$message.success('删除成功')
                this.getList()
            })
        },
        handleEdit(index){
            this.$router.push('/write?id=' + this.posts[index]._id)
        }
    }
}
</script>

<style scoped lang="less">
    .home-wrap{
        padding: 10px ;
        &>button{
            margin-bottom: 15px;
        }
    }
</style>
