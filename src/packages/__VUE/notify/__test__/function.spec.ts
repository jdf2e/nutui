import { NotifyFunction } from './notify';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

describe('function notify', () => {
  test('show text notify', async () => {
    NotifyFunction.text('基础用法', {
      duration: 500,
      color: '#ad0000',
      background: '#ffe1e1'
    });
    const textNotify = document.querySelector('.nut-notify') as HTMLElement;
    expect(textNotify.innerHTML).toContain('基础用法');
    expect(textNotify.style.color).toEqual('rgb(173, 0, 0)');
    expect(textNotify.style.background).toEqual('rgb(255, 225, 225)');
    await sleep(500);
    expect(textNotify.style.display).toEqual('');
  });
  test('show primary notify', async () => {
    NotifyFunction.primary('主要通知', {
      duration: 500
    });
    const textNotify1 = document.querySelector('.nut-notify--primary') as HTMLElement;
    expect(textNotify1.innerHTML).toContain('主要通知');
    await sleep(500);
    expect(textNotify1.style.display).toEqual('');
  });
  test('show success notify', async () => {
    NotifyFunction.success('成功通知', {
      duration: 500
    });
    const textNotify1 = document.querySelector('.nut-notify--success') as HTMLElement;
    expect(textNotify1.innerHTML).toContain('成功通知');
    await sleep(500);
    expect(textNotify1.style.display).toEqual('');
  });
  test('show danger notify', async () => {
    NotifyFunction.danger('危险通知', {
      duration: 500
    });
    const textNotify1 = document.querySelector('.nut-notify--danger') as HTMLElement;
    expect(textNotify1.innerHTML).toContain('危险通知');
    await sleep(500);
    expect(textNotify1.style.display).toEqual('');
  });
  test('show warn notify', async () => {
    NotifyFunction.warn('警告通知', {
      duration: 500
    });
    const textNotify1 = document.querySelector('.nut-notify--warning') as HTMLElement;
    expect(textNotify1.innerHTML).toContain('警告通知');
    await sleep(500);
    expect(textNotify1.style.display).toEqual('');
  });
});
