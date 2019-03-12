<template>
    <div>
        <div class="container">
            <p class="topText">企业作为一个特定的社会经济组织，必然有特定的组织架构。源本圣电子商务公司成立至今公司的组织架构基本完善，每个部门都各执其责，实现人与职的动态协调与
                有机融合，做到每个岗位充分发挥职责，高效的完成工作。</p>
            <img class="content_img" src="../../../static/images/orgnazition.jpg" alt="">
            <p class="introduct">各职能部门介绍说明：</p>
            <p class="title">董事长：</p>
            <p>1、决定公司的经营计划与投资方案；</p>
            <p>2、审计公司所有的重要方案；</p>
            <p>3、公司高层人士的聘用。</p>
            <p class="title">总裁：</p>
            <p>1、执行董事长及公司相关规定；</p>
            <p>2、对公司运营及职能部门进行统筹管理，协调各部门关系；</p>
            <p>3、制定各部门工作任务及目标计划，推动工作任务进展并监督管理；</p>
            <p>4、团队建设、管理及提升。</p>
            <p class="title">技术中心：</p>
            <p>1、负责线上技术跟设计；</p>
            <p>2、迎合市场做相应的线上相关资讯调整；</p>
            <p>3、完成线上更新项目。</p>
            <p class="title">运营中心：</p>
            <p>1、负责线下市场的开发拓展；</p>
            <p>2、协调线上线下信息一致性；</p>
            <p>3、市场营销策划方案；</p>
            <p>4、物流配送的管理。</p>
            <p class="title">PC后台及销售部门：</p>
            <p>1、主要负责PC后台的管理及客户服务。</p>
            <p class="title">资金运作部：</p>
            <p>1、针对性的分配公司资金流向及投资。</p>
            <beian></beian>
        </div>


    </div>
</template>

<script>
    export default {
        name: "organization"
    }
</script>

<style scoped>
    .container{
        width:90%;
        margin:0 auto;
        margin-top:10px;
    }
    .topText{
        text-align: justify;
        text-indent: 2em;
    }
    .content_img{
        width:90%;
        height: auto;
        display: block;
        margin:0 auto;
        margin-top:10px;
    }
    .introduct{
        margin-top:20px;
        color:rgba(255,114,38,1);
        text-align: center;
        font-size: 18px;
    }
    .title{
        font-size:16px;
        color:#444;
        margin-top:15px;
    }
</style>