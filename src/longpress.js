/**
 * @author flitrue
 * @email 812863096@qq.com
 * @create date 2020-12-15 14:15:59
 * @modify date 2020-12-15 14:15:59
 * @desc 长按指令
 */

export default {
  bind(el, binding, VNode) {
    if (typeof binding.value != "function") {
      throw "callback muse be a function";
    }
    let pressTimer = null;
    // 创建计时器
    el.$start = (e) => {
      if (e.type === "click" && e.button !== 0) {
        return;
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler();
        }, 2000);
      }
    };
    // 取消计时器
    el.$cancel = (e) => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    // 运行函数
    const handler = (e) => {
      binding.value();
    };

    el.addEventListener("mousedown", el.$start);
    el.addEventListener("touchstart", el.$start);

    // 取消计时器
    el.addEventListener("click", el.$cancel);
    el.addEventListener("mouseout", el.$cancel);
    el.addEventListener("touchend", el.$cancel);
    el.addEventListener("touchcancel", el.$cancel);
  },
  componentUpdated(el, { value }) {
    el.$value = value;
  },
  unbind(el) {
    // 移除事件绑定
    el.removeEventListener("mousedown", el.$start);
    el.removeEventListener("touchstart", el.$start);
    el.removeEventListener("click", el.$cancel);
    el.removeEventListener("mouseout", el.$cancel);
    el.removeEventListener("touchend", el.$cancel);
    el.removeEventListener("touchcancel", el.$cancel);
  },
};
