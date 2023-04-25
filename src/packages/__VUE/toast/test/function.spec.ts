import { showToast } from '../index';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

describe('function toast', () => {
  test('show loading toast', async () => {
    showToast.loading('加载中', {
      duration: 50
    });
    expect(document.querySelector('.nut-toast.nut-toast-loading')).toBeTruthy();
    const text = document.querySelector('.nut-toast .nut-toast-text') as HTMLDivElement;
    expect(text.innerHTML).toEqual('加载中');
    await sleep(50);
    const loading = document.querySelector('.nut-toast.nut-toast-loading');
    expect(loading).toBeNull();
  });

  test('show text toast', async () => {
    showToast.text('文案', {
      duration: 50,
      title: '标题文字'
    });
    await sleep();
    const textToast = document.querySelector('.nut-toast.nut-toast-center') as HTMLElement;
    expect(textToast.innerHTML).toContain('标题文字');
    await sleep(100);
    expect(textToast.style.display).toEqual('none');
  });
  test('show fail toast', async () => {
    showToast.fail('文案', {
      duration: 0
    });
    await sleep();
    const failToast = document.querySelector('.nut-toast');
    expect(failToast).toMatchSnapshot();
  });
  test('show warn toast', async () => {
    showToast.warn('文案', {
      duration: 0
    });
    await sleep();
    const failToast = document.querySelector('.nut-toast');
    expect(failToast).toMatchSnapshot();
  });
});
