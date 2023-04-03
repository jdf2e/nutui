import DialogFunction from './dialog';

describe('function Dialog', () => {
  test('show dialog base info display ', async () => {
    const dialog = DialogFunction({
      title: 'title',
      content: 'content'
    });
    expect(document.querySelector(`#dialog-${dialog.options.id} .nut-dialog`)).toBeTruthy();
    const textTitle = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__header`
    ) as HTMLDivElement;
    expect(textTitle.innerHTML).toEqual('title');
    const content = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__content view`
    ) as HTMLDivElement;
    expect(content.innerHTML).toEqual('content');
    const footer = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer`
    ) as HTMLDivElement;
    expect(footer.children.length).toEqual(2);
    let cancelBtn = footer.querySelector(`#dialog-${dialog.options.id} .nut-dialog__footer-cancel`) as HTMLDivElement;
    cancelBtn.click();
    cancelBtn = document.querySelector(`#dialog-${dialog.options.id}`) as HTMLDivElement;
    expect(cancelBtn).toBeNull();
  });

  test('show dialog custom info display ', async () => {
    const dialog = DialogFunction({
      title: 'title',
      content: 'content'
    });
    expect(document.querySelector(`#dialog-${dialog.options.id} .nut-dialog`)).toBeTruthy();
    const textTitle = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__header`
    ) as HTMLDivElement;
    expect(textTitle.innerHTML).toEqual('title');
    const content = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__content view`
    ) as HTMLDivElement;
    expect(content.innerHTML).toEqual('content');
    const footer = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer`
    ) as HTMLDivElement;
    expect(footer.children.length).toEqual(2);
    let okBtn = footer.querySelector(`#dialog-${dialog.options.id} .nut-dialog__footer-ok`) as HTMLDivElement;
    okBtn.click();
    okBtn = document.querySelector(`#dialog-${dialog.options.id}`) as HTMLDivElement;
    expect(okBtn).toBeNull();
  });

  test('show dialog custom footer-direction ', async () => {
    const dialog = DialogFunction({
      title: 'title',
      content: 'content',
      footerDirection: 'vertical'
    });
    expect(
      document.querySelector(`#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer.vertical`)
    ).toBeTruthy();
  });

  test('hide dialog footer', async () => {
    const dialog = DialogFunction({
      title: 'title',
      content: 'content',
      noFooter: true
    });
    const footer = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer`
    ) as HTMLDivElement;
    expect(footer).toBeNull();
  });

  test('hide dialog title', async () => {
    const dialog = DialogFunction({
      content: 'content',
      noFooter: true
    });
    const footer = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__header`
    ) as HTMLDivElement;
    expect(footer).toBeNull();
  });
  test('tips dialog', async () => {
    const dialog = DialogFunction({
      title: '温馨提示',
      content: '支持函数调用和组件调用两种方式。',
      noCancelBtn: true
    });
    const footer = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer-cancel`
    ) as HTMLDivElement;
    expect(footer).toBeNull();
  });

  test('dialog cancelText okText', async () => {
    const dialog = DialogFunction({
      title: '温馨提示',
      content: '支持函数调用和组件调用两种方式。',
      cancelText: '取消文案自定义',
      okText: '确定文案自定义'
    });
    const cancelText = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer-cancel `
    ) as HTMLDivElement;
    expect(cancelText.innerHTML).toMatchSnapshot();
    const okText = document.querySelector(
      `#dialog-${dialog.options.id} .nut-dialog .nut-dialog__footer-ok`
    ) as HTMLDivElement;
    expect(okText.innerHTML).toMatchSnapshot();
  });

  test('dialog teleport', async () => {
    const dialog = DialogFunction({
      title: 't1',
      content: 't2',
      teleport: 'body'
    });
    const dialogDom = document.querySelector(`#dialog-${dialog.options.id} .nut-dialog`) as HTMLDivElement;
    expect(dialogDom).toBeTruthy();
  });
});
