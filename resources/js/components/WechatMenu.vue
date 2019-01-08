<template>
    <div class="wechat-menu">
        <a href="#menus-editor">菜单设置</a>
        <a href="#menu-events-setting">菜单事件配置</a>
        <a href="#other-events-setting">其他事件配置</a>
    </div>
</template>

<script>
export default {
    name: 'WechatMenu',
    mounted() {
        window.addEventListener('hashchange', this.onHashChange)
    },
    beforeDestroy() {
        window.removeEventListener('hashchange', this.onHashChange)
    },
    methods: {
        onHashChange(e) {
            log(location.hash)
        },
    },
}
</script>

<style scoped lang="scss">
.wechat-menu {
    max-width: 1320px;
    min-width: 1170px;
}
</style>
