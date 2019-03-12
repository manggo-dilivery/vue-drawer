<template>
    <div class="container">
        <div class="topNav">
            <img src="../../static/images/icon/arrowLeft.png" alt="">
            <p>市场拓展</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "marketDetail"
    }
</script>

<style scoped>
    p{
        margin:0;
    }
    .container{

    }
    .topNav{
        position: fixed;
        z-index:10;
        border-bottom:1px solid #ddd;
        width:100%;
        display: flex;
        align-items: center;
        height: 32px;
    }
    .topNav img{
        width:20px;
        height: 20px;
        margin-left:10px;
        position: fixed;
    }
    .topNav p{
        margin:0 auto;
        color:#333;
    }

</style>