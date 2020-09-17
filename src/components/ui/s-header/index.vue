<template>
    <header class="sm-ui-header" :class="className">
        <span class="sm-ui-header-left" v-if="leftOptions.showBack" @click="onClickBack">
            <i class="iconfont sm-ui-return" v-html="leftIcon"></i>
            <span v-html="leftOptions.html"></span>
        </span>
        <div class="sm-ui-header-title">
            <slot></slot>
        </div>
        <span class="sm-ui-header-right" v-if="rightOptions.showMore" @click="onClickRight" v-html="rightOptions.html">
        </span>
    </header>
</template>
<script>
export default {
    name: "sheader",
    props: {
        leftOptions: {
            type: Object,
            default () {
                return {
                    showBack: true,
                    html: 'Back',
                    preventGoBack: false,
                    callback: function() {}
                }
            }
        },
        title: String,
        leftIcon: {
            type: String,
            default: '&#xe617;'
        },
        className: "",
        rightOptions: {
            type: Object,
            default () {
                return {
                    showMore: false,
                    html: 'right',
                    preventGoBack: false,
                    callback: function() {}
                }
            }
        }
    },
    computed: {},
    activated: function() {
    },
    methods: {
        onClickBack() {
            if (this.leftOptions.preventGoBack) {
                this.leftOptions.callback();
            } else {
                this.$store.commit('UPDATE_DIRECTION', 'reverse'); //返回效果
                history.back()
                window.isBackNative = setTimeout(() => {
                    window.wvObject.backNative()
                }, 320)
            }
        },
        onClickRight(e) {
            if (this.rightOptions.preventGoBack) {
                this.rightOptions.callback(e);
            }
        }
    }
}
</script>