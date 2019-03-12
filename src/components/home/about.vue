<template>
    <div class="home_page">
        <top_on></top_on>
        <img class="topImage" src="../../static/images/about.png" alt="">
        <div class="home_tab">
            <ul class="home_tab_ul">
                <li v-for="(item,index) in tabTag" :key="index" :data-index="index" @click="tabChange(index)">
                    <p :class="currentIndex==index?'selected':''">{{item}}</p>
                </li>
            </ul>
        </div>
        <div v-if="currentIndex == 0" class="box">
            <p class="firstP">
                武汉源本圣电子商务有限公司成立于2017年初，是华中地区领先的生鲜市场整合、管理和运营的平台服务商。
            </p>
            <p class="contentP">
                公司创办人作为传统集贸市场经营管理的专业资深人士，深感行业正面临着越来越大的内外冲击。由此，开发运营了
                “逛市场APP”电子商务平台，以“互联网+市场+商户+社区居民”线上线下通融模式，整合市场资源，丰富市场服务，
                弥补渠道短板，提升消费体验；与集贸市场伙伴，抱团组团，形成“市场共享、商户共享、服务共享”的共享经营模式，
                打造本地生活服务圈
            </p>
            <p class="contentP">
                在武汉市各级政府及相关职能部门的重视、关怀、支持下，目前公司武汉业务态势良好，与武汉上百家生鲜市场缔结了战略合作
                关系，正在迅速推进武汉生鲜市场线上线下融合，网上生鲜运营平台已经开始走进社区居民的日常生活，真正实现了“网上一点，生鲜到家”
                的“立体式”社区服务愿景。
            </p>
            <p class="contentP">
                公司将秉承“清源正本，服务至圣”的经营理念，携手合作伙伴，发挥资源优势，塑强市场公信，维护食品安全，
                引领消费潮流，努力开创多赢的生鲜市场格局，共享行业璀璨明天！
            </p>
        </div>
        <div v-if="currentIndex == 1" class="box">
            <p class="firstP">
                “大江大湖，九省通衢”的武汉，已经站在了新一轮中国创新发展的重要高地。国家中心城市、长江
                经济带超级城市、中部水陆空交通枢纽、中部崛起的战略支点等国家战略布局的清晰定位，赋予了武汉发展
                的光荣责任和新的历史机遇。
            </p>
            <p class="contentP">
                武汉源本圣电子商务有限公司以“清源正本，服务至圣”为企业经营理念，着眼社区民生，顺应消费潮流；以
                “互联网+”突破，开发运营“逛市场APP”电商平台，探索“互联网+市场+商户+社区居民”线上线下通融模式，
                整合市场资源，创新市场服务，弥补渠道短板；以“不忘初心、平台共建、利益共享”为基础，通过引导
                “市场和商户”上线“逛市场APP”平台，实现“市场共享、商户共享、产品共享、服务共享”抱团组团的共享经济
                模式，打造网上生鲜运营平台。真正实现“网上一点，生鲜到家”的“立体式”社区服务愿景。
            </p>
            <p class="contentP">
                “两个一百年”奋斗目标，是中华民族开拓进取、伟大复兴的世纪指引。武汉正处于历史发展的黄金机遇期
                ，我们将抢抓机遇，携手合作伙伴，从武汉出发，行稳致远，走向中国，早日实现“源本圣”成为“中国社区民生服务的领先知名平台商”
                的远大愿景！
            </p>
            <p class="footerP">
                武汉源本圣电子商务有限公司CEO：邓同胜
            </p>
            <p class="footerP">
                2017年3月2日
            </p>
            <p class="footerP">
                于中国  武汉
            </p>
            <beian></beian>
        </div>
        <div v-if="currentIndex == 2" class="box">
            <organization></organization>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tabTag:['企业介绍','CEO寄语','组织架构'],
                selected: '1',
                currentIndex:'0'
            }
        },
        created(){
            // this.$axios.get('/provide/lunbo').then( (result) => {
            //     for(var i=0 ; i<result.data.length ; i++){
            //         this.image.push('http://localhost:80'+result.data[i].lunboUrl)
            //     }
            // }).catch(function (err) {
            //     console.log(err)
            // })
        },
        methods:{
            unload(){
                alert('暂未上线')
            },
            tabChange(index){
                // var that = this;
                this.currentIndex = index;
                console.log( index)
            }
        }
    }
</script>

<style scoped>
    ul{
        margin: 0;
        padding: 0;
    }
    .topImage{
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
        width:95%;
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
        margin-bottom:0;
        line-height: 36px;
        width:90px;
        margin:0 auto;
    }
    .selected{
        border-bottom:2px solid #FF7226;
    }
    .firstP{
        width:90%;
        margin:0 auto;
        margin-top:15px;
        text-align: justify;
        text-indent: 2em;
        color:#777;
    }
    .contentP{
        width:90%;
        margin:0 auto;
        margin-top:10px;
        text-align: justify;
        text-indent: 2em;
        color:#777;
    }
    .footerP{
        width:90%;
        margin-top:10px;
        color:#777;
        text-align: center;
    }
    .box{
        padding:0 0 20px 0;
    }
</style>