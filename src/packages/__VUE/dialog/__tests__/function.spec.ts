import DialogFunction from './dialog';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

describe('function Dialog', () => {
  test('show dialog base info display ', async () => {
    let dialog = DialogFunction({
      title: 'title',
      content: 'content'
    });
    await sleep(500);
    expect(document.querySelector(`#dialog-${dialog.options.id} .nut-dialog`)).toBeTruthy();
    let textTitle = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__header`
    ) as HTMLDivElement;
    expect(textTitle.innerHTML).toEqual('title');
    let content = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__content view`
    ) as HTMLDivElement;
    expect(content.innerHTML).toEqual('content');
    let footer = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer`
    ) as HTMLDivElement;
    expect(footer.children.length).toEqual(2);
    let cancelBtn = footer.querySelector(`#dialog-${dialog.options.id} .nut-dialog__footer-cancel`) as HTMLDivElement;
    cancelBtn.click();
    await sleep(500);
    cancelBtn = document.querySelector(`#dialog-${dialog.options.id}`) as HTMLDivElement;
    expect(cancelBtn).toBeNull();
  });

  test('show dialog custom info display ', async () => {
    let dialog = DialogFunction({
      title: 'title',
      content: 'content'
    });
    await sleep(500);
    expect(document.querySelector(`#dialog-${dialog.options.id} .nut-dialog`)).toBeTruthy();
    let textTitle = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__header`
    ) as HTMLDivElement;
    expect(textTitle.innerHTML).toEqual('title');
    let content = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__content view`
    ) as HTMLDivElement;
    expect(content.innerHTML).toEqual('content');
    let footer = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer`
    ) as HTMLDivElement;
    expect(footer.children.length).toEqual(2);
    let okBtn = footer.querySelector(`#dialog-${dialog.options.id} .nut-dialog__footer-ok`) as HTMLDivElement;
    okBtn.click();
    await sleep(500);
    okBtn = document.querySelector(`#dialog-${dialog.options.id}`) as HTMLDivElement;
    expect(okBtn).toBeNull();
  });

  test('show dialog custom footer-direction ', async () => {
    let dialog = DialogFunction({
      title: 'title',
      content: 'content',
      footerDirection: 'vertical'
    });
    await sleep(500);
    expect(
      document.querySelector(`#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer.vertical`)
    ).toBeTruthy();
  });

  test('hide dialog footer', async () => {
    let dialog = DialogFunction({
      title: 'title',
      content: 'content',
      noFooter: true
    });
    await sleep(500);
    let footer = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer`
    ) as HTMLDivElement;
    expect(footer).toBeNull();
  });

  test('hide dialog title', async () => {
    let dialog = DialogFunction({
      content: 'content',
      noFooter: true
    });
    await sleep(500);
    let footer = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__header`
    ) as HTMLDivElement;
    expect(footer).toBeNull();
  });
  test('tips dialog', async () => {
    let dialog = DialogFunction({
      title: '温馨提示',
      content: '支持函数调用和组件调用两种方式。',
      noCancelBtn: true
    });
    await sleep(500);
    let footer = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer-cancel`
    ) as HTMLDivElement;
    expect(footer).toBeNull();
  });

  test('dialog cancelText okText', async () => {
    let dialog = DialogFunction({
      title: '温馨提示',
      content: '支持函数调用和组件调用两种方式。',
      cancelText: '取消文案自定义',
      okText: '确定文案自定义'
    });
    await sleep(1000);
    let cancelText = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer-cancel `
    ) as HTMLDivElement;
    expect(cancelText.innerHTML).toEqual('取消文案自定义');
    let okText = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer-ok`
    ) as HTMLDivElement;
    expect(okText.innerHTML).toEqual('确定文案自定义');
  });

  test('dialog teleport', async () => {
    let dialog = DialogFunction({
      title: 't1',
      content: 't2',
      teleport: 'body'
    });
    await sleep(1000);
    let dialogDom = document.querySelector(`#dialog-${dialog.options.id} .nut-dialog`) as HTMLDivElement;
    expect(dialogDom).toBeTruthy();
  });
});
