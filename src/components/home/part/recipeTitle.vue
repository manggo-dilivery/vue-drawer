<template>
    <div class="recipeTltle">
        <div class="left"></div>
        <p>{{title}}</p>
    </div>
</template>

<script>
    export default {
        name: "recipeTitle",
        data(){
            return{}
        },
        props:['title']
    }
</script>

<style scoped>
    p{
        margin:0;
    }
    .recipeTltle{
        display: flex;
        align-items: center;
        width:100%;
        padding: 7px 0;
        border-bottom:1px solid #eee;
        background: #fff;
    }
    .left{
        width:3px;
        height: 15px;
        background: rgba(255,114,38,1);
    }
    .recipeTltle p{
        color:rgba(255,114,38,1);
        margin-left:12px;
    }
</style>