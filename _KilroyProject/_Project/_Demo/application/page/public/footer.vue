<template>
    <footer id="footer" class="footer">
    </footer>
</template>

<script lang="ts" type="text/tsx">
export default {
    name: 'Footer',
    props: {
        Data: Object
    },
    data: (component) => {
        const _this = this,
            prop = {
                Data: component.Data
            };

        return {
            name: prop + '_Footer'
        }
    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../../resource/css/_global.less';

@image_footer: '../src/image/footer/';

.footer {
    overflow: hidden;
    .position(absolute, auto, 0, 0, 0);
    z-index: 1;
    width: 100%;
    height: 60*@px;
}
</style>
