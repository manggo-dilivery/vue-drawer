<template>
    <div class="container">
        <top_on></top_on>
        <!--<mt-swipe :auto="4000">-->
            <!--<mt-swipe-item v-for="(item,index) in topBanner" :key="index">-->
                <!--<img class="banner" :src="item.Image"/>-->
            <!--</mt-swipe-item>-->
        <!--</mt-swipe>-->

        <div style="background:#fff;">
            <div class="home_tab">
                <ul class="home_tab_ul">
                    <li v-for="(item,index) in tabTag" :key="index" :data-index="index" @click="tabChange(index)">
                        <p :class="currentIndex==index?'selected':''">{{item}}</p>
                    </li>
                </ul>
            </div>
            <div v-if="currentIndex == 0">
                <router-link :to="{name:'marketDetail',query:{id:index}}" v-for="(item,index) in businessInfo" :key="index">
                    <div class="item"  @click="stopDrawer">
                        <img :src="item.Image" alt="">
                        <div class="item_content">
                            <p>{{item.title}}</p>
                            <p>{{item.contents}}</p>
                            <p>[市场信息] [市场拓展]</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div v-if="currentIndex == 1">
                <div class="projectGoods">
                    <img class="cooperation" src="../../static/images/cooperation.jpg" alt="">
                    <p class="content">源本圣电子商务是一个发展中的企业，企业在不同的时期会有不同的
                    需求，任何一个品牌或是一个企业都无法在行业内或者经营领域“独秀”，
                    时代在不断进步与发展，我们也需要其他更好的思路扩展业务，让企业与个人
                    或是企业与企业之间形成共赢的合作模式。</p>
                    <p class="content">我们平台会把集贸市场打造成一个全新的网络虚拟而又真实的市场，将以生鲜区和商城
                    百货区来展示商家商品，并让顾客贴心周到的服务，让消费者在任何地方都能选择离家近的
                    市场选购产品，网上下单预约送货的方式享受买菜，购物的乐趣！</p>
                    <p class="content">我们有好的平台期待更好的项目加入！共同创造行业的辉煌！</p>
                    <beian></beian>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import connect from '../common/connect.js'
    export default {
        name: "join_us",
        data(){
            return {
                tabTag:['市场拓展','项目招商'],
                currentIndex:'0',
                topBanner:[],
                businessInfo:[]
            }
        },
        created(){
            // this.$axios.get('/UserInfo/GetWebAdvertBanner?AdvertType=78')
            //     .then( result => {
            //         this.topBanner = result.data.data.AdvertBanner;
            //         console.log(result.data.data.AdvertBanner)
            //     }).catch( err=> {
            //         console.log(err)
            // })
            this.$axios.get('/UserInfo/GetWebNewsList?PageIndex=1&NewsType=2')
                .then( result => {
                    this.businessInfo = result.data.dt;
                    console.log(result)
                }).catch( err => {
                    console.log(err)
            })
        },
        methods:{
            tabChange(index){
                this.currentIndex = index;
            },
            stopDrawer(){
                connect.$emit('stop',false)
            }
        }
    }
</script>

<style scoped>
    ul{
        padding: 0;
    }
    .container{
        margin-top:40px;
        background: rgba(241,241,241,1);
    }
    .top_img{
        width: 100%;
        height: 169px;
    }
    .top_banner{
        width:100%;
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
    .item{
        display:flex;
        width:94%;
        margin: 0 auto;
        padding:13px 0;
        border-bottom:1px dotted #eee;
    }
    .item > img{
        width:25%;
        height: 64px;
        margin-top:6px;
    }
    .item_content p{
        text-align: justify;
        margin:0;
    }
    .item_content{
        margin-left:10px;
    }
    .item_content p:first-child{
        font-size:15px;
        color:#444;
    }
    .item_content p:nth-child(2){
        margin-top:5px;
        font-size:10px;
        line-height: 14px;
        overflow: hidden;
        width:95%;
        text-overflow: ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
    }
    .item_content P:last-child{
        font-size:10px;
        margin-top:5px;
    }
    .cooperation{
        width:200px;
        height: auto;
        display: block;
        margin:0 auto;
        margin-top:15px;
    }
    .content{
        width:90%;
        margin:0 auto;
        text-align: justify;
        text-indent: 2em;
        margin-top:20px;
        color:#666;
    }
</style>