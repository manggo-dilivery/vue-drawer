<template>
    <div class="amap-page-container">
        <el-amap vid="amapDemo"  :center="center" :amap-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
        </el-amap>
    </div>
</template>

<script>
    import VueAMap  from 'vue-amap';
    let amapManager = new VueAMap.AMapManager();
    export default {
       data(){
           return {
               zoom: 12,
               center: [114.357289,30.620479],
               amapManager,
               events: {
                   init(o) {
                       let marker = new AMap.Marker({
                           position: [114.357289,30.620479]
                       });

                       marker.setMap(o);
                   }
               }
           };
       },
        create(){
            let marker = {
                position: [121.5273285, 31.21515044]
            };
            this.markers.push(marker);
        }
    }
</script>

<style scoped>
    .amap-demo {
        height: 200px;
    }

</style>