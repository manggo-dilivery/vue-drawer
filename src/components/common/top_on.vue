<template>
    <div class="top_on">
        <p>源本圣</p>
    </div>
</template>

<script>
    export default {
        name: "top_on"
    }
</script>

<style scoped>
    .top_on{
        width:100%;
        height: 40px;
        display:flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #fd7819, #fc7519, #f64927,#f33330);
        position:fixed;
        top:0;
        z-index:10;
    }
    .top_on p{
        color:#fff;
        margin:0;
        font-size: 16px;
    }
</style>