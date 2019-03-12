<template>
    <div class="foodContainer">
        <top_on></top_on>
        <img class="topImage" src="../../static/images/signupbanne.jpg" alt="">
        <div class="search">
            <div class="searchBox">
                <img src="../../static/images/icon/search.png" alt="">
                <input type="text" placeholder="请输入关键字">
            </div>
        </div>
        <div class="recipe">
            <recipeTitle title="美食菜谱"></recipeTitle>
            <div class="recipe_box">
                <div class="recipe_item">
                    <img src="../../static/images/food.jpg" alt="">
                    <p>爆炒</p>
                </div>
                <div class="recipe_item">
                    <img src="../../static/images/food.jpg" alt="">
                    <p>爆炒</p>
                </div>
                <div class="recipe_item">
                    <img src="../../static/images/food.jpg" alt="">
                    <p>爆炒</p>
                </div>
                <div class="recipe_item">
                    <img src="../../static/images/food.jpg" alt="">
                    <p>爆炒</p>
                </div>

            </div>
        </div>
        <div class="common">
            <recipeTitle title="生活常识"></recipeTitle>
            <common></common>
        </div>
        <div class="common">
            <recipeTitle title="生活常识"></recipeTitle>
            <common></common>
        </div><div class="common">
        <recipeTitle title="生活常识"></recipeTitle>
        <common></common>
    </div>
    </div>
</template>

<script>
    export default {
        name: "healthFood"
    }
</script>

<style scoped>
    p{
        margin:0;
    }
    input::-ms-input-placeholder{
        color:#aaa;
    }
    input::-webkit-input-placeholder{
        color:#aaa;
    }
    input::-ms-input-placeholder{
        color:#aaa;
    }
    .foodContainer{
        margin-top:40px;
        background: #F1F1F1;
    }
    .topImage{
        width:100%;
        height: auto;
    }
    .search{
        background: #fff;
        margin:5px 0;
        width: 100%;
        padding:10px 0;
    }
    .searchBox{
        width:80%;
        height: 32px;
        border:1px solid #ddd;
        margin:0 auto;
        position: relative;
        border-radius:30px;
    }
    .searchBox img {
        width:18px;
        height: 18px;
        position: absolute;
        top:50%;
        margin-top:-8px;
        left:6%;
    }
    .searchBox input{
        border:none;
        width:80%;
        height: 100%;
        margin:0;
        margin-left:10%;
        font-size:12px;
    }
    .recipe{
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 15px;
    }
    .recipe_box{
        width:100%;
        margin-top:5px;
        display: flex;
        flex-wrap: wrap;
    }
    .recipe_item{
        width:46%;
        position: relative;
        margin-left:2.7%;
        margin-top:10px;
    }
    .recipe_item img{
        width:100%;
        display: block;
        height: 100px;
        margin:0 auto;
        border-radius: 10px;
    }
    .recipe_item p{
        position: absolute;
        left: 0;
        right: 0;
        bottom:0;
        width:100%;
        height: 20px;
        background: rgba(0,0,0,0.5);
        border-radius: 0 0 10px 10px;
        text-align: center;
        color:#fff;
        font-size: 12px;
        letter-spacing: 5px;
    }
    .common{
        margin-top:10px;
        background: #fff;
    }
</style>