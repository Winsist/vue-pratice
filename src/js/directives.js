import utils from './utils/utils'

export default Vue => {
    //输入金额，保留两位小数
    Vue.directive('amt',{
        bind:function(el){
            el.handler = function() {
                var str = el.value;
                el.value = utils.Input.clearNoPricePub(str,999999999.99);
            }
            el.addEventListener('input', el.handler)
        },
        unbind: function(el) {
            el.removeEventListener('input', el.handler)
        }

    })

    //全是数字,整数，不包含小数
    Vue.directive('numberall', {
        bind: function(el, binding) {
            el.handler = function() {
                var str = el.value;
                el.value = utils.Input.clearNoInteger(str);
            }
            el.addEventListener('input', el.handler)
    
        },
        unbind: function(el) {
            el.removeEventListener('input', el.handler)
        }
    })

    //非0整数
    Vue.directive('number', {
        bind: function(el, binding) {
            el.handler = function() {
                var str = el.value;
                el.value = utils.Input.clearNoInt(str);
            }
            el.addEventListener('input', el.handler)
    
        },
        unbind: function(el) {
            el.removeEventListener('input', el.handler)
        }
    })
}