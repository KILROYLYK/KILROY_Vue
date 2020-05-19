<template>
    <div id="index" class="index">
    </div>
</template>

<script lang="ts" type="text/tsx">
    export default {
        name: 'Index',
        components: {
        },
        props: {
            Data: Object
        },
        data: (component) => {
            const _this = this,
                prop = {
                    Data: component.Data
                };

            return {
                name: prop + '_Index'
            }
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
