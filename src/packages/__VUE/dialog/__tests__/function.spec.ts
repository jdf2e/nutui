import DialogFunction from './dialog';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

describe('function Dialog', () => {
  test('show dialog info ', async () => {
    DialogFunction({
      title: 'title',
      content: 'content'
    });
    await sleep(1000);
    expect(document.querySelector('.nut-dialog')).toBeTruthy();
    let textTitle = document.querySelector('.nut-dialog .nut-dialog__header') as HTMLDivElement;
    expect(textTitle.innerHTML).toEqual('title');
    let content = document.querySelector('.nut-dialog .nut-dialog__content view') as HTMLDivElement;
    expect(content.innerHTML).toEqual('content');
  });
});
