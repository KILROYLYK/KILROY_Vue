<template>
    <footer id="footer" class="footer">
    </footer>
</template>

<script lang="ts" type="text/tsx">
    export default {
        name: 'Footer',
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
    
    @image_footer: '../src/image/footer/';
    
    .footer {
        overflow: hidden;
        .position(absolute, auto, 0, 0, 0);
        z-index: 1;
        width: 100%;
        height: 60*@px;
    }
</style>
