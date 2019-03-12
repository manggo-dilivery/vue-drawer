<template>
    <div class="drawer">
        <ul class="drawer_ul">
            <router-link :to="{name:'home'}">
                <li class="drawer_li">
                    <div></div>
                    <div class="drawer_div">
                        <div class="drawer_content_left">
                            <img src="../../static/images/home.png">
                            <p>首页</p>
                        </div>
                        <img src="../../static/images/arrow.png">
                    </div>
                </li>
            </router-link>
            <router-link :to="{name:'about'}">
                <li class="drawer_li">
                    <div></div>
                    <div class="drawer_div">
                        <div class="drawer_content_left">
                            <img src="../../static/images/anchor.png">
                            <p>关于源本圣</p>
                        </div>
                        <img src="../../static/images/arrow.png">
                    </div>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "drawer",
        methods:{
            handleToggleDrawer(){
                this.$refs.drawerLayout.toggle();
            }
        }
    }
</script>

<style scoped>
    .drawer_div{
        width:100%;
        height: 60px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #535459;
    }
    .drawer_content_left{
        display:flex;
        align-items: center;
    }
    .drawer_content_left p{
        font-size: 18px;
        margin: 0;
        margin-left:20px;
    }
    .drawer_content_left img{
        width:28px;
        height: 28px;
        margin-left:50px;
    }
    .drawer_div > img{
        width:25px;
        height: 25px;
        margin-right:20px;
    }
    .drawer_ul{
        margin: 0;
        padding:0;
    }
    .drawer_li{
        list-style: none;
    }
    .active li{
        background: #323338;
    }
</style>