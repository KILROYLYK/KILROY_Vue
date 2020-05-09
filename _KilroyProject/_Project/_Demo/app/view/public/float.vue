<template>
    <section id="float" class="float">
    </section>
</template>

<script>
    export default {
        name: 'Index',
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
    
    .float {
        overflow: hidden;
        .position(fixed, 40%, 0*@px, auto, auto);
        z-index: 1;
        width: 50*@px;
        height: 100*@px;
    }
</style>
