<template>
    <footer id="footer" class="footer">
        <div>
            <ul>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-facebook"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-twitter"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-instagram"></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fa fa-linkedin"></span>
                    </a>
                </li>
            </ul>
        </div>
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
        .position(absolute, auto, 0*@px, 0*@px, 0*@px);
        width: 100%;
        height: 60*@px;
    }
</style>
