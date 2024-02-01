import { ref, Ref, onMounted } from 'vue';

type ScrollElement = HTMLElement | Window;

const overflowScrollReg = /scroll|auto|overlay/i;
const defaultRoot = window;

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === ELEMENT_NODE_TYPE;
}

export function getScrollParent(el: Element, root: ScrollElement | undefined = defaultRoot) {
  let node = el;

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode as Element;
  }

  return root;
}

export function getAllScrollableParents(element: Element | null, scrollableParents: Element[] = []): Element[] {
  console.log('elment', element);
  if (!element) {
    return scrollableParents;
  }

  // 检查元素是否具有滚动条
  const isScrollable = element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;

  if (isScrollable) {
    // 如果当前元素具有滚动条，则将其添加到数组中
    if (element.nodeName === 'HTML') {
      // @ts-ignore
      scrollableParents.push(document);
    } else {
      scrollableParents.push(element);
    }
  }

  // 递归检查父元素
  return getAllScrollableParents(element.parentElement, scrollableParents);
}

export function useScrollParent(el: Ref<Element | undefined>, root: ScrollElement | undefined = defaultRoot) {
  const scrollParent = ref<Element | Window>();

  onMounted(() => {
    if (el.value) {
      scrollParent.value = getScrollParent(el.value, root);
    }
  });

  return scrollParent;
}
