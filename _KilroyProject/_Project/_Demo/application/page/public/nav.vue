<template>
    <nav id="nav" class="nav">
    </nav>
</template>

<script lang="ts" type="text/tsx">
export default {
    name: 'Nav',
    props: {
        Data: Object
    },
    data: (component) => {
        const _this = this,
            prop = {
                Data: component.Data
            };

        return {
            name: prop + '_Nav'
        }
    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../../resource/css/_global.less';

@image_nav: '../src/image/nav/';

.nav {
    overflow: hidden;
    .position(absolute, 0, 0, auto, 0);
    z-index: 1;
    width: 100%;
    height: 60*@px;
}
</style>
