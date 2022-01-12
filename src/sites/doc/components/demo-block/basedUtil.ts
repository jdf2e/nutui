import * as LZUTF8 from 'lzutf8';
function encodeBase64(str: Uint8Array): any {
  // @ts-ignore
  return LZUTF8.encodeBase64(str);
}
function decodeBase64(str: string): any {
  // @ts-ignore
  return LZUTF8.decodeBase64(str);
}

export function compressText(str: string): any {
  // @ts-ignore
  return encodeBase64(LZUTF8.compress(str, { outputEncoding: 'ByteArray' }));
}
export function decompressText(str: string): any {
  // @ts-ignore
  return LZUTF8.decompress(decodeBase64(str));
}

export function copyCodeHtml(code: string, callback: any): void {
  const oInput = document.createElement('textarea');
  oInput.value = code;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象
  document.execCommand('Copy'); // 执行浏览器复制命令
  oInput.className = 'oInput';
  oInput.style.display = 'none';
  oInput.setSelectionRange(0, 9999);
  callback();
}
