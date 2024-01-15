import Taro from '@tarojs/taro';
import CanvasContext = Taro.CanvasContext;
declare const compareVersion: (v1Old: string, v2Old: string) => 1 | -1 | 0;
declare function easySetStrokeStyle(systemInfo: Taro.getSystemInfoSync.Result, canvasContext: CanvasContext, color: string | CanvasGradient): void;
declare function easySetLineWidth(systemInfo: Taro.getSystemInfoSync.Result, canvasContext: CanvasContext, lineWidth: number): void;
declare function easySetFillStyle(systemInfo: Taro.getSystemInfoSync.Result, canvasContext: CanvasContext, color: string | CanvasGradient): void;
export { compareVersion, easySetStrokeStyle, easySetLineWidth, easySetFillStyle };
