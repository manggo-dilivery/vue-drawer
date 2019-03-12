<template>
    <div class="container">
        <top_on></top_on>
        <div class="top_img">
            <img class="top_banner" src="../../static/images/signupbanne.jpg" alt="">
        </div>

        <div style="background:#fff;">
            <div class="home_tab">
                <ul class="home_tab_ul">
                    <li v-for="(item,index) in tabTag" :key="index" :data-index="index" @click="tabChange(index)">
                        <p :class="currentIndex==index?'selected':''">{{item}}</p>
                    </li>
                </ul>
            </div>
            <div v-if="currentIndex == 0">
                <div>
                    <img class="hirePeople" src="../../static/images/wanted.jpg" alt="">
                    <p class="contentP">为什么要重视人才？人才是企业的生命，是竞争的焦点，是企业经营成功，基业长青的关键，
                    人力资本是企业更重要的驱动力！人才重要，决定了人力资源管理的重要，人力资源管理，不仅是
                    人才管理，人本管理，而且是企业中能动资源的管理。</p>
                    <p class="contentP">源本圣电子商务有限公司重视人才的发掘，储备，培养，让每一个有理由和能力的人都能施展
                    自己的长处。公司大力实施“人才企业”战略，把“引用人才，用好人才，培养人才”作为重中之重，
                    尽力为引进的人才在工作和生活中创造宽松，和谐的环境，不断提高员工队伍的团队归属感和生活幸福感，
                    形成了“源于团队，公司如家”的浓浓氛围，源本圣电子商务在未来3年计划中，将想社会敞开怀抱，招贤纳士。</p>
                    <p class="contentP">源本圣电子商务有限公司给你平台，只要你有想法，有思路，有创新，你的财富就由你来创造！！！
                    “辉煌的明天，从源本圣开始！”公司给你的成长、事业、家庭保驾护航，今天的努力才能换来明天的成功！与你
                    与你共赴美好的前程！</p>
                    <beian></beian>
                </div>
            </div>
            <div v-if="currentIndex == 1">
                <div class="item">
                    <img src="../../static/images/jiaban.jpg" alt="">
                    <div class="item_content">
                        <p>源本圣 招聘岗位--软件测试工程师</p>
                        <p>招聘岗位：软件测试工程师岗位职责：（1）根据软件需求定制
                        测试方案与测试计划，明确测试策略、设计测试用例。（2）根据放到沙发上发呆舒服</p>
                        <p>[ 招贤纳士 ]</p>
                    </div>
                </div>
                <div class="item">
                    <img src="../../static/images/jiaban.jpg" alt="">
                    <div class="item_content">
                        <p>源本圣 招聘岗位--软件测试工程师</p>
                        <p>招聘岗位：软件测试工程师岗位职责：（1）根据软件需求定制
                            测试方案与测试计划，明确测试策略、设计测试用例。（2）根据放到沙发上发呆舒服</p>
                        <p>[ 招贤纳士 ]</p>
                    </div>
                </div>
                <div class="item">
                    <img src="../../static/images/jiaban.jpg" alt="">
                    <div class="item_content">
                        <p>源本圣 招聘岗位--软件测试工程师</p>
                        <p>招聘岗位：软件测试工程师岗位职责：（1）根据软件需求定制
                            测试方案与测试计划，明确测试策略、设计测试用例。（2）根据放到沙发上发呆舒服</p>
                        <p>[ 招贤纳士 ]</p>
                    </div>
                </div>
            </div>
            <div v-if="currentIndex == 2">
                <div class="item">
                    <img src="../../static/images/jiaban.jpg" alt="">
                    <div class="item_content">
                        <p>源本圣 招聘岗位--软件测试工程师</p>
                        <p>招聘岗位：软件测试工程师岗位职责：（1）根据软件需求定制
                            测试方案与测试计划，明确测试策略、设计测试用例。（2）根据放到沙发上发呆舒服</p>
                        <p>[ 招贤纳士 ]</p>
                    </div>
                </div>
                <div class="item">
                    <img src="../../static/images/jiaban.jpg" alt="">
                    <div class="item_content">
                        <p>源本圣 招聘岗位--软件测试工程师</p>
                        <p>招聘岗位：软件测试工程师岗位职责：（1）根据软件需求定制
                            测试方案与测试计划，明确测试策略、设计测试用例。（2）根据放到沙发上发呆舒服</p>
                        <p>[ 招贤纳士 ]</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "join_us",
        data(){
            return {
                tabTag:['人才理念','招聘信息','员工培训'],
                currentIndex:'1'
            }
        },
        methods:{
            tabChange(index){
                this.currentIndex = index;
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
    .contentP{
        width:90%;
        margin:0 auto;
        margin-top:15px;
        text-align: justify;
        text-indent: 2em;
        color:#666;
    }
    .hirePeople{
        width:230px;
        display: block;
        margin:0 auto;
        margin-top:20px;
    }
</style>