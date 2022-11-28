import { Interceptor } from '@/packages/utils/util';

export interface ImageInterface {
  src: string;
}

export type ImagePreviewOptions = {
  show: Boolean;
  images: ImageInterface[];
  videos: [];
  contentClose: Boolean;
  initNo: Number;
  paginationVisible: Boolean;
  paginationColor: String;
  autoplay: [Number, String];
  isWrapTeleport: Boolean;
  showIndex?: boolean;
  closeable?: boolean;
  closeIcon?: string;
  closeIconPosition?: String;
  beforeClose?: Interceptor;
  maxZoom?: number;
  minZoom?: number;
  isLoop?: boolean;
  close?(): void;
  change?(index: number): void;
};

export const baseProps = {
  show: { type: Boolean, default: false },
  initNo: { type: Number, default: 0 },
  showIndex: { type: Boolean, default: true },
  minZoom: { type: Number, default: 1 / 3 },
  maxZoom: { type: Number, default: 3 }
};
