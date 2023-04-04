import { ToastFunction } from './toast';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

describe('function toast', () => {
  test('show loading toast', async () => {
    ToastFunction.loading('加载中');
    expect(document.querySelector('.nut-toast.nut-toast-loading')).toBeTruthy();
    const text = document.querySelector('.nut-toast .nut-toast-text') as HTMLDivElement;
    expect(text.innerHTML).toEqual('加载中');
    await sleep(3000);
    const loading = document.querySelector('.nut-toast.nut-toast-loading');
    expect(loading).toBeNull();
  });

  test('show text toast', async () => {
    ToastFunction.text('文案', {
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
    ToastFunction.fail('文案', {
      duration: 0
    });
    await sleep();
    const failToast = document.querySelector('.nut-toast');
    expect(failToast).toMatchSnapshot();
  });
  test('show warn toast', async () => {
    ToastFunction.warn('文案', {
      duration: 0
    });
    await sleep();
    const failToast = document.querySelector('.nut-toast');
    expect(failToast).toMatchSnapshot();
  });
});
