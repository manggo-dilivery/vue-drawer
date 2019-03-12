<template>
    <div class="container">
        <top_on></top_on>
        <recipeTitle title="地图定位"></recipeTitle>
        <div class="map">
            <ymap></ymap>
        </div>
        <div class="item">
            <recipeTitle title="地图定位"></recipeTitle>
            <div class="item_content">
                <div>
                    <img src="../../static/images/icon/qq.png" alt="">
                    <p>企业QQ：</p>
                </div>
                <p>3504170640</p>
            </div>
            <div class="item_content">
                <div>
                    <img src="../../static/images/icon/qq.png" alt="">
                    <p>客服QQ：</p>
                </div>
                <p>214284851</p>
            </div>
            <div class="item_content">
                <div>
                    <img src="../../static/images/icon/phone.png" alt="">
                    <p>电话：</p>
                </div>
                <p>214284851</p>
            </div>
            <div class="item_content">
                <div>
                    <img src="../../static/images/icon/mail.png" alt="">
                    <p>邮箱：</p>
                </div>
                <p>3504170640@qq.com</p>
            </div>
            <div class="item_content">
                <div>
                    <img src="../../static/images/icon/mail.png" alt="">
                    <p>地址：</p>
                </div>
                <p>德平路怡芳院D栋一单元3楼</p>
            </div>
        </div>

        <div class="time">
            <recipeTitle title="地图定位"></recipeTitle>
            <p>周一至周五：08:30 -- 17:30</p>
            <p>周六至周日：09:30 -- 17:30</p>
        </div>

        <div class="copy_right">
            <beian></beian>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contract"
    }
</script>

<style scoped>
    p{
        margin:0;
    }
    .container{
        margin-top:40px;
        background:rgba(241,241,241,1);
    }
    .map{
        height: 210px;
    }
    .item{
        width:100%;
        height: auto;
        background: #fff;
    }
    .item_content{
        display: flex;
        align-items: center;
        padding: 5px 0;
    }
    .item_content div{
        flex:1;
        display: flex;
        align-items: center;
    }
    .item_content div img{
        width:18px;
        height: 18px;
        margin-left:12px;
    }
    .item_content div p{
        margin-left:8px;
        font-size: 15px;
        color:#444;
    }
    .item_content p{
        flex:2;
        font-size: 15px;
        color:#444;
        margin-left:3px;
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow:ellipsis;
    }

    .time{
        margin-top:10px;
        background: #fff;
    }
    .time p{
        margin-left:12px;
        margin-top:5px;
        font-size:14px;
        color:#555;
    }
    .time p:first-of-type{
        margin-top:10px;
    }
    .copy_right{
        position: absolute;
        width:100%;
        bottom:0px;
        padding: 10px 0 0 0 ;
        text-align: center;
        border-top:1px solid #eee;
    }
    .copy_right p{
        font-size:10px;
    }
</style>