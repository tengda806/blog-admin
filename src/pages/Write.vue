<template>
    <div class="write-wrap">
         <mavon-editor 
             v-model="content"
            @change="change" 
            style="min-height:100vh"
            @save='save'
         />
    </div>
</template>

<script>

export default {
    data(){
        return {
            content: ``,
            html:'',
            markdownOption: {   
                
            },
        }
    },
    mounted(){
        
    },
    methods:{
        change(value, render){this.html = render},
        save(){console.log(1)}
    }
}
</script>

<style scoped lang="less">

</style>
