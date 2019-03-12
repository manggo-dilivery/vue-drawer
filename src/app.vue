<template>
    <div>
        <vue-drawer-layout
                ref="drawerLayout" :enable="bool" @mask-click="handleMaskClick" :content-drawable="true">
            <div class="drawer" slot="drawer">
                <div class="text">
                    <div class="drawer">
                        <ul class="drawer_ul">
                            <router-link :to="{name:'home'}">
                                <li class="drawer_li" @click="handleToggleDrawer">
                                    <div class="left_bar"></div>
                                    <div class="drawer_div">
                                        <div class="drawer_content_left">
                                            <img src="./static/images/icon/home.png">
                                            <p>首页</p>
                                        </div>
                                        <img src="./static/images/icon/arrow.png">
                                    </div>
                                </li>
                            </router-link>
                            <router-link :to="{name:'about'}">
                                <li class="drawer_li" @click="handleToggleDrawer">
                                    <div class="left_bar"></div>
                                    <div class="drawer_div">
                                        <div class="drawer_content_left">
                                            <img src="./static/images/icon/about.png">
                                            <p>关于源本圣</p>
                                        </div>
                                        <img src="./static/images/icon/arrow.png">
                                    </div>
                                </li>
                            </router-link>
                            <router-link :to="{name:'companyAnimate'}">
                                <li class="drawer_li" @click="handleToggleDrawer">
                                    <div class="left_bar"></div>
                                    <div class="drawer_div">
                                        <div class="drawer_content_left">
                                            <img src="./static/images/icon/about.png">
                                            <p>企业动态</p>
                                        </div>
                                        <img src="./static/images/icon/arrow.png">
                                    </div>
                                </li>
                            </router-link>
                            <router-link :to="{name:'download'}">
                                <li class="drawer_li" @click="handleToggleDrawer">
                                    <div class="left_bar"></div>
                                    <div class="drawer_div">
                                        <div class="drawer_content_left">
                                            <img src="./static/images/icon/zhaopin.png">
                                            <p>app下载</p>
                                        </div>
                                        <img src="./static/images/icon/arrow.png">
                                    </div>
                                </li>
                            </router-link>
                            <router-link :to="{name:'healthyFood'}">
                                <li class="drawer_li" @click="handleToggleDrawer">
                                    <div class="left_bar"></div>
                                    <div class="drawer_div">
                                        <div class="drawer_content_left">
                                            <img src="./static/images/icon/healthyFood.png">
                                            <p>健康美食</p>
                                        </div>
                                        <img src="./static/images/icon/arrow.png">
                                    </div>
                                </li>
                            </router-link>
                            <router-link :to="{name:'join_us'}">
                                <li class="drawer_li" @click="handleToggleDrawer">
                                    <div class="left_bar"></div>
                                    <div class="drawer_div">
                                        <div class="drawer_content_left">
                                            <img src="./static/images/icon/company.png">
                                            <p>招商合作</p>
                                        </div>
                                        <img src="./static/images/icon/arrow.png">
                                    </div>
                                </li>
                            </router-link>
                            <router-link :to="{name:'recruit'}">
                                <li class="drawer_li" @click="handleToggleDrawer">
                                    <div class="left_bar"></div>
                                    <div class="drawer_div">
                                        <div class="drawer_content_left">
                                            <img src="./static/images/icon/zhaopin.png">
                                            <p>招贤纳士</p>
                                        </div>
                                        <img src="./static/images/icon/arrow.png">
                                    </div>
                                </li>
                            </router-link>
                            <router-link :to="{name:'contract'}">
                                <li class="drawer_li" @click="handleToggleDrawer">
                                    <div class="left_bar"></div>
                                    <div class="drawer_div">
                                        <div class="drawer_content_left">
                                            <img src="./static/images/icon/contract.png">
                                            <p>联系我们</p>
                                        </div>
                                        <img src="./static/images/icon/arrow.png">
                                    </div>
                                </li>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="content" slot="content" style="overflow: scroll">
                <a href="javascript:void(0)" class="btn"
                   @click="handleToggleDrawer"> <img src="./static/images/icon/home.png" alt=""></a>
                <!--<top_on></top_on>-->
                <router-view></router-view>
            </div>
        </vue-drawer-layout>

    </div>
</template>

<script>
    import connect from './components/common/connect.js'
    export default{
        data(){
            return {
                bool:true
            }
        },
        created(){
            connect.$on('stop',num => {
                this.bool = num;
            });
            connect.$on('start',num => {
                this.bool = num;
            })
        },
        methods: {
            handleToggleDrawer() {
                this.$refs.drawerLayout.toggle();
            },
            handleMaskClick(){
                this.$refs.drawerLayout.toggle();
            }
        },
        props:{
            drawerWidth: {
                type: Number
            },
            drawableDistance: {
                type: Number
            },
            zIndex: {
                type: Number,
                default: 818
            },
            contentDrawable: {
                type: Boolean,
                default: false
            },
            backdrop: {
                type: Boolean,
                default: true
            },
            backdropOpacityRange: {
                type: Array,
                default: function () {
                    return [0, 0.4]
                },
                validator: function (value) {
                    let [min, max] = value;
                    return min < max && min >= 0 && max <= 1
                }
            },
            enable: {
                type: Boolean,
                default:true
            },
            animatable: {
                type: Boolean,
                default: true
            },
            reverse: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style>
    html,body,#app {height: 100%;}
    .drawer{
        background: #414247;
        height: 100%;
        /*margin-top:40px;*/
    }
    .drawer_div{
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
        font-size: 15px;
        margin: 0;
        margin-left:20px;
    }
    .drawer_content_left img{
        width:18px;
        height: 18px;
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
    .active .drawer_li .left_bar{
        width:8px;
        height: 60px;
        background: #fd7819;
        position: absolute;
    }
    .btn{
        position: fixed;
        top:8px;
        left:20px;
        z-index:20;
    }
    .btn img{
        width:25px;
        height: 25px;
    }
    .content{
        height: 100%;
    }
</style>