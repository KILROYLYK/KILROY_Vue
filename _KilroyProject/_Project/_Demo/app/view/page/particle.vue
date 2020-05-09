<template>
    <canvas id="particle" class="particle" />
</template>

<script lang="ts" type="text/tsx">
    export default {
        name: 'Particle',
        data: (component) => {
            const _this = this,
                props = {};
            
            return {}
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import '../../../../_Base/css/base.less';
    
    .particle {
        .position(absolute, 0, 0, 0, 0);
        z-index: 0;
        width: 100%;
        height: 100%;
    }
</style>
