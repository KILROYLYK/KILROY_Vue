<template>
    <nav id="nav" class="nav">
    </nav>
</template>

<script lang="ts" type="text/tsx">
    export default {
        name: 'Nav',
        props: {
            data: Object
        },
        data: () => {
            const _this = this;
            return {}
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import '../../../../_Base/css/base.less';
    
    @app_img: '../../src/image/';
    
    #nav {
        .position(fixed, 0*@px, 0*@px, auto, 0*@px);
        width: 100%;
        height: 60*@px;
        background: fade(#000000, 75);
    }
</style>
