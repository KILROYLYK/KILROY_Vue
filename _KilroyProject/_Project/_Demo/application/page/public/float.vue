<template>
    <div id="float" class="float">
    </div>
</template>

<script>
export default {
    name: 'Float',
    props: {
        Data: Object
    },
    data: (component) => {
        const _this = this,
            prop = {
                Data: component.Data
            };
        return {
            name: prop + '_Float'
        }
    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import '../../../../_Base/Resource/css/base.less';

@image_nav: '../src/image/float/';

.float {
    overflow: hidden;
    .position(fixed, 40%, 0, auto, auto);
    z-index: 1;
    width: 50*@px;
    height: 100*@px;
}
</style>
