<template>
    <div class="container">
        <div class="item">
            <div class="item_top">
                <img class="fruit" src="../../../static/images/fruit.jpg" alt="">
                <p>这些水果蒸着吃食疗效果增倍发的都是的方法是否</p>
            </div>
            <div class="item_bottom">
                <div class="item_bottom_left">
                    <div class="item_bottom_left_div1">
                        <img src="../../../static/images/icon/message.png" alt="">
                        <p>26</p>
                    </div>
                    <div class="border"></div>
                    <div class="item_bottom_left_div2">
                        <img src="../../../static/images/icon/client.png" alt="">
                        <p>一天</p>
                    </div>
                    <div class="item_bottom_left_div3">
                        <p>生活常识</p>
                    </div>
                </div>
                <div class="item_bottom_right">
                    <p>2018/5/9</p>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="item_top">
                <img class="fruit" src="../../../static/images/fruit.jpg" alt="">
                <p>这些水果蒸着吃食疗效果增倍发的都是的方法是否</p>
            </div>
            <div class="item_bottom">
                <div class="item_bottom_left">
                    <div class="item_bottom_left_div1">
                        <img src="../../../static/images/icon/message.png" alt="">
                        <p>26</p>
                    </div>
                    <div class="border"></div>
                    <div class="item_bottom_left_div2">
                        <img src="../../../static/images/icon/client.png" alt="">
                        <p>一天</p>
                    </div>
                    <div class="item_bottom_left_div3">
                        <p>生活常识</p>
                    </div>
                </div>
                <div class="item_bottom_right">
                    <p>2018/5/9</p>
                </div>
            </div>
        </div>
        <div class="pageChange">
            <p class="pageUp">上一页</p>
            <p class="pageDown">下一页</p>
            <div class="pageIndex">
                <span>1</span>
                <span>/</span>
                <span>3</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "common"
    }
</script>

<style scoped>
    .container{
        padding-bottom: 12px;
    }
    p{
        margin:0;
    }
    .fruit{
        width:60px;
        height: 45px;
        border-radius:5px;
    }
    .item_top{
        display: flex;
        align-items: center;
    }
    .item_top p{
        width:75%;
        font-size: 14px;
        color:#666;
        margin-left:7px;
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
    }
    .item{
        width:95%;
        margin:0 auto;
        margin-top:10px;
        padding-bottom: 10px;
    }
    .item_bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom:1px solid #ddd;
        padding:0 0 10px 0;
    }
    .item_bottom_left{
        display: flex;
        align-items: center;
        width:70%;
        margin-top:7px;
        position: relative;
    }
    .item_bottom_left_div1,.item_bottom_left_div2,.item_bottom_left_div3{
        flex:1;
        display: flex;
        align-items: center;
    }
    .item_bottom_left_div1 img{
        width:11px;
        height: 11px;
        margin-left:5px;
    }
    .item_bottom_left_div1 p{
        margin-left:5px;
    }
    .item_bottom_left_div2 img{
        width:11px;
        height: 11px;
    }
    .item_bottom_left_div2 p{
        margin-left:5px;
    }
    .item_bottom_left_div3 p{
        margin-left:5px;
    }
    .item_bottom_right{
        margin-right: 10px;
    }
    .border{
        position: absolute;
        width:1px;
        height: 12px;
        border-right: 1px solid #ddd;
        top:50%;
        margin-top:-7px;
        left:23%;
    }
    .pageUp{
        width:60px;
        height: 25px;
        border:1px solid rgba(255,114,38,1);
        text-align: center;
        line-height:25px;
        color:rgba(255,114,38,1);
        margin-left:15%;
    }
    .pageDown{
        width:60px;
        height: 25px;
        border:1px solid rgba(255,58,38,1);
        text-align: center;
        line-height:25px;
        color:rgba(255,58,38,1);
        margin-right:15%;
    }
    .pageIndex{
        bottom:2px;
        left:50%;
        margin-left:-16px;
        position: absolute;
    }
    .pageChange{
        position: relative;
        display:flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        margin-top:8px;
    }

</style>