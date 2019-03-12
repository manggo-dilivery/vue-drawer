<template>
    <div class="container">
        <top_on></top_on>
        <div class="top_banner">
            <img src="../../static/images/download.png" alt="">
        </div>
        <div class="middle">
            <div class="recipeTltle">
                <div class="left"></div>
                <p>产品特性</p>
            </div>
            <div class="character">
                <div class="character_one">
                    <div class="character_item">
                        <img src="../../static/images/icon/category.png" alt="">
                        <p>品类丰富</p>
                    </div>
                    <div class="character_item">
                        <img src="../../static/images/icon/healthy.png" alt="">
                        <p>新鲜健康</p>
                    </div>
                    <div class="character_item">
                        <img src="../../static/images/icon/safe.png" alt="">
                        <p>食品安全</p>
                    </div>
                </div>
                <div class="character_one">
                    <div class="character_item">
                        <img src="../../static/images/icon/shop.png" alt="">
                        <p>优质商家</p>
                    </div>
                    <div class="character_item">
                        <img src="../../static/images/icon/kuaidi.png" alt="">
                        <p>送货上门</p>
                    </div>
                    <div class="character_item">
                        <img src="../../static/images/icon/kefu.png" alt="">
                        <p>售后服务</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="recipeTltle">
                <div class="left"></div>
                <p>下载指引</p>
            </div>
            <div class="download">
                <img src="../../static/images/downloadGuide.png" alt="">
            </div>
        </div>
        <beian></beian>
    </div>
</template>

<script>
    export default {
        name: "download"
    }
</script>

<style scoped>
    .container{

        margin-top:40px;
    }
    .top_banner{
        height: 174px;
    }
    .top_banner img{
        width:100%;
    }
    p{
        margin:0;
    }
    .recipeTltle{
        display: flex;
        align-items: center;
        width:100%;
        padding: 7px 0;
        background: #fff;
    }
    .left{
        width:3px;
        height: 15px;
        background: #FF3A26;
    }
    .recipeTltle p{
        color:#FF3A26;
        margin-left:12px;
    }
    .character{
        background: #fff;
    }
    .character_one{
        width:95%;
        margin:0 auto;
        display: flex;
        align-items: center;
        padding: 25px 0 0 0 ;
    }
    .character_item{
        flex:1;
        text-align: center;
    }
    .character_item img{
        width:50px;
        height: 50px;
        display: block;
        margin:0 auto;
    }
    .middle{
        padding-bottom:15px;
        background: #fff;
    }
    .download{
        height: 174.5px;
    }
    .download img{
        width: 100%;
    }

</style>