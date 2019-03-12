<template>
    <div>
        <div>
            <ul class="tabUl">
                <li class="tabLi" v-for="(item ,index ) in info" :key="index">
                    <img class="dot" src="../../../static/images/icon/dot.png" alt="">
                    <div class="tabli_div">
                        <p>{{item.title}}</p>
                        <img src="../../../static/images/icon/arrowb.png" alt="">
                    </div>
                    <div class="item">
                        <div class="item_left">
                            <img src="../../../static/images/icon/message.png" alt="">
                            <p>10</p>
                            <img src="../../../static/images/icon/client.png" alt="">
                            <p>沫沫</p>
                        </div>
                        <div class="border"></div>
                        <div class="item-right">
                            <p>{{item.name}}</p>
                            <p>2018/07/27</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="pageChange">
            <p class="pageUp" @click="subnum">上一页</p>
            <p class="pageDown" @click="addnum">下一页</p>
            <div class="pageIndex">
                <span >1</span>
                <span>/</span>
                <span>3</span>
            </div>
        </div>
        <div class="copy_right">
            <p>Copyright &copy; 2017 武汉源本圣电子商务有限公司 版权所有</p>
        </div>
    </div>
</template>

<script>
    import connect from '../../common/connect.js'
    export default {
        name: "item",
        data(){
            return {
                message:''
            }
        },
        props:['info'],
        methods:{
            subnum(){
                connect.$emit('sub','-1')
            },
            addnum(){
                connect.$emit('add','1')
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
    .dot{
        width:15px;
        height: 15px;
        position: absolute;
        top:15px;
        left:-2px;
        margin-left:10px;
    }
    .tabTop{
        width:95%;
        margin:0 auto;
    }
    .tabUl{

    }
    .tabUl li:first-child{
        border-top:none !important;
    }
    .tabLi{
        list-style: none;
        position: relative;
        border-top:1px solid #eee;
        padding:14px 0;
    }
    .tabli_div{
        display: flex;
        align-items: center;
        justify-content:space-between;
        margin-left:25px;
    }
    .tabli_div img{
        width:13px;
        height: 13px;
        margin-right: 20px;
    }
    .tabli_div p{
        padding: 0;
    }
    .item{
        display: flex;
        align-items: center;
        width:90%;
        margin-top:8px;
    }
    .item_left{
        display: flex;
        align-items: center;
    }
    .item_left img{
        width: 15px;
        height: 15px;
    }
    .item_left img:first-child{
        margin-left:25px;
    }
    .item_left img:last-of-type{
        margin-left:20px;
    }
    .item_left p{
        padding:0 0 0 10px;
    }
    .item_left p:last-of-type{
        padding: 0 20px 0 10px;
        font-size:12px;
    }
    .item-right{
        display: flex;
        align-items: center;
    }
    .item-right p:first-child{
        margin-left:20px;
    }
    .item-right p:last-child{
        margin-left:20px;
    }
    .border{
        width: 1px;
        height: 12px;
        border-right:1px solid #bbb;
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
        position: absolute;
        bottom:2px;
        left:50%;
        margin-left:-16px;
    }
    .pageChange{
        display:flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom:60px;
        width:100%;
    }
    .copy_right{
        position: absolute;
        width:100%;
        bottom:13px;
        padding: 10px 0 0 0 ;
        text-align: center;
        border-top:1px solid #eee;
    }
    .copy_right p{
        font-size:10px;
    }
</style>