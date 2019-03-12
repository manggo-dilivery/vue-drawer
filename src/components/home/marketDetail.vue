<template>
    <div class="container">
        <div class="topNav">
            <img src="../../static/images/icon/arrowLeft.png" @click="startDrawer">
            <p>市场拓展</p>
        </div>
        <div class="html" v-html="detail.body"></div>
    </div>
</template>

<script>
    import connect from '../common/connect.js'
    export default {
        name: "marketDetail",
        data(){
            return {
                detail:{}
            }
        },
        created(){
            this.$axios.get('/UserInfo/GetWebNewsList?PageIndex=1&NewsType=2')
                .then( result => {
                    let id = this.$route.query.id;
                    this.detail = result.data.dt[id];
                    console.log(this.detail)
                }).catch( err => {
                    console.log(err)
            })
        },
        methods:{
            startDrawer(){
                connect.$emit('start',true);
                this.$router.go(-1);
            }
        }
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
        top:0;
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
    .html{
        margin-top:50px;
    }

</style>