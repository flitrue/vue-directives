/**
 * @author flitrue
 * @email 812863096@qq.com
 * @create date 2020-12-15 14:59:15
 * @modify date 2020-12-15 14:59:15
 * @desc 按钮防抖指令
 */

 export default {
   bind(el, binding, VNode) {
     let timer = null
     el.handler = (e) => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 2000)
     }

     el.addEventListener('click', el.handler)
   },
   unbind(el) {
     el.removeEventListener('click', el.handler)
   }
 }