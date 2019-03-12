<template>
    <div class="beian">
        <div class="beian_img" >
            <img src="../../static/images/icon/beian.png" style="float:left;"/><p>鄂公网安备 42010602002933号</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "beian"
    }
</script>

<style scoped>
    .beian{
        background: #fff;
    }
    .beian_img{
        width:100%;
        display: flex;
        justify-content: center;
        margin-top:10px;
    }
    .beian_img a{
        display:inline-block;
        text-decoration:none;
        height:20px;
        line-height:20px;
    }
    .beian_img img{
        float:left;
        height:20px;
        line-height:20px;
        margin: 0 0 0 5px;
        color:#939393;
        margin-right: 7px;
    }
</style>