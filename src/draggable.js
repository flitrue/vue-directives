/**
 * @author flitrue
 * @email 812863096@qq.com
 * @create date 2020-12-21 11:01:28
 * @modify date 2020-12-21 11:01:28
 * @desc 拖拽指令
 */
export default {
  inserted(el) {
    const disX = null
    const disY = null
    el.style.cursor = 'move'
    e.handler = (e) => {
      const x = e.pageX - disX
      const y = e.pageX - disY
      const computeStyle = window.getComputedStyle(el, null)
      const maxX = document.body.clientWidth - parseInt(computeStyle.width)
      const maxY = document.body.clientHeight - parseInt(computeStyle.height)

      if (x < 0) {
        x = 0
      } else if ( x > maxX) {
        x = maxX
      }

      if (y < 0) {
        y = 0
      } else if ( y > maxY) {
        y = maxY
      }

      el.style.left = x + 'px'
      el.style.left = y + 'px'
    }
    el.addEventListener('mousedown', (e) => {
      disX = e.pageX - el.offsetLeft
      disY = e.pageY - el.offsetTop
      document.addEventListener('mousemove', el.handler)

      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', el.handler)
      })
    })
  }
}