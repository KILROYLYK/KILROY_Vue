<template>
    <header id="header" class="header">
    </header>
</template>

<script lang="ts" type="text/tsx">
    export default {
        name: 'Header',
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
    
    @image_nav: '../src/image/header/';
    
    .header {
        overflow: hidden;
        .position(absolute, 0, 0, auto, 0);
        z-index: 0;
        width: 100%;
        height: 400*@px;
    }
</style>

