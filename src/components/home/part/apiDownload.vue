<template>
    <div class="apiContainer">
        <p class="apiContainer_p">下载地址</p>
        <div class="code">
            <img src="../../../static/images/twoVersionCode1.jpg" alt="">
            <img src="../../../static/images/twoVersionCode2.jpg" alt="">
        </div>
        <div class="tag">
            <div class="item">
                <img src="../../../static/images/icon/apple.gif" alt="">
                <p>苹果下载</p>
            </div>
            <div class="item">
                <img src="../../../static/images/icon/android.gif" alt="">
                <p>安卓下载</p>
            </div>
        </div>
        <p class="guide">下载指引</p>
        <div class="guide_div">
            <img class="downloadGuide" src="../../../static/images/downloadGuide.png" alt="">
        </div>
        <div class="footer">
            <beian></beian>
        </div>

    </div>
</template>

<script>
    export default {
        name: "apiDownload"
    }
</script>

<style scoped>
    p{
        margin:0;
    }
    .apiContainer{
        height: 100%;
    }
    .apiContainer_p{
        margin-top:8px;
        margin-left:8px;
        color:rgba(255,114,38,1);
    }
    .downloadGuide{
        width:100%;
        height: auto;
        margin-top:10px;
    }
    .code{
        width:74%;
        margin:0 auto;
        margin-top:10px;
        display: flex;
        justify-content: space-between;
    }
    .code img{
        width:110px;
        height: 110px;
    }
    .tag{
        display:flex;
        width:80%;
        margin:0 auto;
        margin-top:18px;
        justify-content: space-between;
    }
    .item{
        width:130px;
        height: 44px;
        background: #00c683;
        border-radius:6px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .item img{
        width:30px;
        height: 30px;
        margin-right:4px;
    }
    .item p{
        color:#fff;
        margin-left:4px;
    }
    .guide{
        margin-top:15px;
        margin-left:8px;
        color:rgba(255,114,38,1);
    }
    .guide_div{

    }
    .footer{
        padding:0 0 10px 0;
    }
</style>