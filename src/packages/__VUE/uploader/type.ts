import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('uploader');
export type SizeType = 'original' | 'compressed';
export type SourceType = 'album' | 'camera' | 'user' | 'environment';
export type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error';
export class FileItem {
  status: FileItemStatus = 'ready';
  message: string = translate('ready');
  uid: string = new Date().getTime().toString();
  name?: string;
  url?: string;
  type?: string;
  path?: string;
  percentage: string | number = 0;
  formData: any = {};
}
