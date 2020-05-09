<template>
    <div id="index" class="index">
        <Particle :Global="Global" :Data="Data" />
    </div>
</template>

<script lang="ts" type="text/tsx">
    import Particle from './particle.vue';
    
    export default {
        name: 'Index',
        components: {
            Particle
        },
        props: {
            Global: Function,
            Data: Object
        },
        data: (component) => {
            const _this = this,
                props = {
                    Global: component.Global,
                    Data: component.Data
                };
            
            return {}
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import '../../../../_Base/css/base.less';
    
    @image_nav: '../src/image/index/';
    
    .index {
        overflow: hidden;
        position: relative;
        z-index: 0;
        width: 100%;
        height: 100%;
    }
</style>
