<template>
    <div class="companyAnimate">
        <top_on></top_on>
        <img class="weAre" src="../../static/images/companyAnimate.png" alt="">
        <div class="company_tab">
            <ul class="company_tab_ul">
                <li v-for="(item,index) in tabbarTag" :key="index" :data-index="index" @click="tabChange(index)">
                    <p :class="currentIndex==index?'pActive':''">{{item}}</p>
                </li>
            </ul>
        </div>
        <div class="tabTop" v-if="currentIndex == 0">
            <item :info="newsOne"></item>
        </div>
        <div v-if="currentIndex == 1">
            <item :info="newsTwo"></item>
        </div>
        <div v-if="currentIndex == 2">
            <item :info="newsThree"></item>
        </div>
    </div>
</template>

<script>
    import connect from "../common/connect";

    export default {
        name: "companyAnimate",
        data(){
            return {
                tabbarTag:['企业文化','行业资讯','精彩视频'],
                currentIndex:'0',
                newsOne:[],
                newsTwo:[],
                newsThree:[],
                page1:0,
                page2:0,
                page3:0
            }
        },
        created(){
            this.$axios.get('/UserInfo/GetWebNewsList?PageIndex='+this.page1+'&NewsType=6')
                .then( result => {
                    console.log(result.data.dt);
                    this.newsOne = result.data.dt;
                }).catch( err => {
                console.log(err)
            })
            this.$axios.get('/UserInfo/GetWebNewsList?PageIndex=1&NewsType=5')
                .then( result => {
                    console.log(result.data.dt);
                    this.newsTwo = result.data.dt;
                }).catch( err => {
                console.log(err)
            })
            connect.$on('add',num => {
                console.log('page'+this.currentIndex)
                if(this.currentIndex == 0){
                    if(this.page1>=3){
                        return
                    }else{
                        this.page1 = this.page1 + parseInt(num);
                        console.log(this.page1)
                    }
                }else if(this.currentIndex == 1){
                    if(this.page2>=3){
                        return
                    }else{
                        this.page2 = this.page2 + parseInt(num);
                    }
                }else{
                    if(this.page3>=3){
                        return
                    }else{
                        this.page3 = this.page3 + parseInt(num);
                    }
                }
                // switch (this.currentIndex) {
                //     case '0':
                //         this.page1 = this.page1 + parseInt(num);
                //         console.log(this.page1);
                //         break;
                //     case '1':{
                //         this.page2 = this.page1 + parseInt(num);
                //         console.log(this.page2);
                //         break;
                //     }
                //     case '2':{
                //         this.page3 = this.page1 + parseInt(num);
                //         console.log(this.page3)
                //         break;
                //     }
                // }
            })
            connect.$on('sub',num => {
                if(this.currentIndex == 0){
                    if(this.page1<=0){
                        return
                    }else{
                        this.page1 = this.page1 + parseInt(num);
                        console.log(this.page1)
                    }
                }else if(this.currentIndex == 1){
                    if(this.page2<=0){
                        return
                    }else{
                        this.page2 = this.page2 + parseInt(num);
                    }
                }else{
                    if(this.page3<=0){
                        return
                    }else{
                        this.page3 = this.page3 + parseInt(num);
                    }
                }
            })
        },
        methods:{
            tabChange(index){
                this.currentIndex = index;
            }
        },
        watch:{
            page1(oldVal,newVal){
                console.log(oldVal);
                this.newsOne = [];
                this.$axios.get('/UserInfo/GetWebNewsList?PageIndex='+oldVal+'&NewsType=5')
                    .then( result => {
                        console.log(result.data.dt);
                        this.newsOne = result.data.dt;
                    }).catch( err => {
                    console.log(err)
                })
            },
            page2(oldVal,newVal){
                console.log(oldVal);
                this.newsTwo = [];
                this.$axios.get('/UserInfo/GetWebNewsList?PageIndex='+oldVal+'&NewsType=5')
                    .then( result => {
                        console.log(result.data.dt);
                        this.newsTwo = result.data.dt;
                    }).catch( err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
    p{
        margin:0;
    }
    ul{
        margin:0;
        padding: 0;
    }

    .companyAnimate{
        margin-top:40px;
    }
    .weAre{
        width:100%;
        height: auto;
    }
    .company_tab{

    }
    .company_tab_ul{
        display:flex;
    }
    .company_tab_ul li{
        list-style:none;
        flex:1;
        text-align: center;
        border-bottom:1px solid #eee;
    }
    .company_tab_ul li p{
        width:80%;
        padding:5px 0 3px 0;
        margin:0 auto;

    }
    .pActive{
        border-bottom:2px solid rgba(255,58,38,1) !important;
        color:rgba(255,58,38,1) !important;
    }

</style>