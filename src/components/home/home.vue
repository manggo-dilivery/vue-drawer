<template>
    <div class="home_page">
        <top_on></top_on>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in image" :key="index">
                <img class="banner" :src="item.Image"/>
            </mt-swipe-item>
        </mt-swipe>
        <div class="home_tab">
            <ul class="home_tab_ul">
                <li v-for="(item,index) in tabTag" :key="index" :data-index="index" @click="tabChange(index)">
                    <p :class="currentIndex==index?'selected':''">{{item}}</p>
                </li>
            </ul>
        </div>
        <div v-if="currentIndex == 0">
            <div class="recipe">
                <div class="recipe_top">
                    <img src="../../static/images/shengxian.jpg" alt="">
                </div>
                <div class="recipe_footer">
                    <p>这些水果蒸着吃食疗效果增倍这些水果蒸着吃食疗效果增倍这些水果蒸着吃食疗效果增倍</p>
                    <div>
                        <p>生活百科</p>
                        <p>2018/5/9</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="currentIndex == 1">
            <apiDownLoad></apiDownLoad>
        </div>
        <div v-if="currentIndex == 2">
            <item></item>
        </div>
    </div>
</template>

<script>
    import jsonp from 'jsonp'
    import fetch from '../common/fetch.js'
    export default {
        data(){
            return {
                tabTag:['美食菜谱','app下载','员工风采'],
                selected: '1',
                currentIndex:'0',
                image:[]
            }
        },
        created(){
            // fetch({
            //     method: 'get',
            //     url: 'http://oa.yuanbensheng.net/UserInfo/GetWebAdvertBanner?AdvertType=75'
            // })
            //     .then(res => {
            //         cosole.log(res)
            //     })
            this.$axios.get('/UserInfo/GetWebAdvertBanner?AdvertType=75').then( result => {
                this.image = result.data.data.AdvertBanner;
                console.log(this.image);
            }).catch(function (err) {
                console.log(err)
            })
            // $.ajax({
            //     url: 'http://192.168.5.167:80/UserInfo/webinfo?AdvertType=75',
            //     dataType: 'jsonp',
            //     success: function (res) {
            //         console.log(res)
            //     }
            // })
            // jsonp('http://oa.yuanbensheng.net/UserInfo/GetWebAdvertBanner?AdvertType=75', null, (err, data) => {
            //     if (err) {
            //         console.error(err.message);
            //     } else {
            //         console.log(data);
            //     }
            // });
        },
        methods:{
            unload(){
                alert('暂未上线')
            },
            tabChange(index){
                this.currentIndex = index;
                // console.log( index)
            }
        }
    }
</script>

<style scoped>
    .home_page{
        height: 100%;
    }
    p{
        margin:0;
    }
    ul{
        padding: 0;
        margin:0;
    }
    .mint-swipe{
        height: 170px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    .banner{
        width: 100%;
        height: auto;
    }
    .mint-swipe-items-wrap{
        height: 187px;
        width:100%;
    }
    .home_page{
        margin-top:40px;
    }
    .home_tab{
        width:100%;
    }
    .home_tab_ul{
        display: flex;
        align-items: center;
        width:90%;
        margin:0 auto;
        border-bottom:1px solid rgba(229,229,229,1)
    }
    .home_tab_ul li{
        list-style: none;
        flex:1;
        display: flex;
        align-items: center;
        text-align: center;
    }
    .home_tab_ul li p{
        line-height: 36px;
        width:90px;
        margin:0 auto;
    }
    .selected{
        border-bottom:2px solid #FF7226;
    }
    .recipe{
        width:92%;
        margin:0 auto;
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom:1px solid #ddd;
    }
    .recipe_top{
        display: flex;
        align-items: center;
    }
    .recipe_top img{
        width:70px;
        height: 55px;
        border-radius:6px;
        margin-left:5px;
    }
    .recipe_footer{
        width:74%;
    }
    .recipe_footer > p{
        margin:0;
        color:#666;
        font-size:15px;
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 8px;
        margin-left:10px;
    }

    .recipe_footer div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left:10px;
    }
    .recipe_footer div p:first-child{
        margin-right: 15px;
    }
</style>