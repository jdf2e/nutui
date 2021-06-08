export const Hover = {
  mounted(el: HTMLElement) {
    //绑定事件
    el.addEventListener('mouseover', () => {
      el.style.color = '#fa2c19';
    });
    el.addEventListener('mouseleave', () => {
      el.style.color = '';
    });
  }
};
