<template>
    <div class="write-wrap">
        <el-input 
            placeholder="请输入标题"
            v-model="title"
            class="mb15"
        ></el-input>
         <mavon-editor 
            v-model="content"
            @change="change" 
            style="min-height:90vh"
            @save='save'
         />
    </div>
</template>

<script>
import { savePost,putPost,getPost } from "../api/post"
export default {
    data(){
        return {
            title:'',
            content: ``,
            html:'',
            markdownOption: {   
                
            },
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        change(value, render){this.html = render},
        getData(){
            if(this.$route.query.id){
               return getPost({id:this.$route.query.id}).then(res=>{
                    this.title = res.data.title
                    this.content = res.data.content
                    this.change()
                 })
            }
           
        },
        save(){
            if(this.title === '') return this.$message.error('请输入标题')
            if(this.content === '') return this.$message.error('请输入内容')
            let params = {title:this.title,content:this.content,html:this.html} ; 
            if(!this.$route.query.id) {
            savePost(params).then(res=>{
                    if(res.code===1){
                        this.$message.success('保存成功')
                        this.$router.push('/home')
                    }
                })
            }else{
                putPost({...params,id:this.$route.query.id}).then(res=>{
                    if(res.code === 1){
                        this.$message.success('保存成功')
                    }
                })
            }
        }
    }
} 
</script>

<style scoped lang="less">
    
</style>
