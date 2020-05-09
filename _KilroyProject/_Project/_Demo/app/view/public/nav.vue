<template>
    <nav id="nav" class="nav">
    </nav>
</template>

<script lang="ts" type="text/tsx">
    export default {
        name: 'Nav',
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
    
    @image_nav: '../src/image/nav/';
    
    .nav {
        overflow: hidden;
        .position(absolute, 0*@px, 0*@px, auto, 0*@px);
        z-index: 1;
        width: 100%;
        height: 60*@px;
    }
</style>
