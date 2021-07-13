/**
 * @author flitrue
 * @email 812863096@qq.com
 * @create date 2020-12-15 11:10:43
 * @modify date 2020-12-15 11:10:43
 * @desc 复制指令
 */

 export default {
   bind(el, {value}) {
     el.$value = value
     el.handler = () => {
       if (!el.$value) {
         console.log('复制的内容为空')
         return
       }
       
       const textarea = document.createElement('textarea')
       textarea.readOnly = 'readOnly'
       textarea.style.position = 'absolute'
       textarea.style.left = '-9999px'
       textarea.value = el.$value
       document.body.appendChild(textarea)
       textarea.select()
       const result = document.execCommand('copy')
       if (result) {
         console.log('复制成功')
       }
       document.body.removeChild(textarea)
     }

     el.addEventListener('click', el.handler)
   },
   inserted(el) {},
   update() {},
   componentUpdated(el, {value}) {
    el.$value = value
   },
   unbind(el) {
    el.removeEventListener('click', el.handler)
   }
 }