<template>
    <div class="admin-wrap clearfix">
        <div :class="show?'show left-menu':'left-menu'"></div>
        <div :class="show?'content show ':'content '">
            <router-view></router-view>
        </div>
        <div class="toggleMenu cp" @click="show = !show">Menu</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:false
        }
    }
}
</script>

<style scoped lang="less">
    .left-menu{
        position: fixed;
        width: 200px;
        top: 0;
        left: -200px;
        transition: 1s;
        background: #f4f4f4;    
        height: 100vh;
        &.show{
            left: 0;
        }
    }
    .content{
        width: 100%;
        height: 100vh;
        background: rgba(214, 236, 255, .3);
        transition: 1s;
        &.show{
            width: calc(100vw - 200px);
            transform: translateX(200px);
            
        }
    }
    .toggleMenu{
        width: 50px;
        height: 50px;
        background: rgba(0, 0, 0, .2);
        border-radius: 50%;
        position: fixed;
        bottom: 50px ; 
        left: 50px ;
        color: #fff;
        text-align: center;
        line-height: 50px;
        transition: 500ms;
        &:hover{
            background: rgba(0, 0, 0, .5);
            transform: scale(1.2);
            border-radius: 20%;
        }
    }
</style>
