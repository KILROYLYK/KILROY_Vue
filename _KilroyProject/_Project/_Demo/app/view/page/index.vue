<template>
    <div id="index" class="index">
    
    </div>
</template>

<script lang="ts" type="text/tsx">
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
    
    @image_nav: '../src/image/index/';
    
    
</style>
