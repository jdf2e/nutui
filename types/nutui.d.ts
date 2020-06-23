import Vue from 'vue';

declare class UIComponent extends Vue {
  static install(vue: typeof Vue): void;
}

export interface InstallationOptions {
  locale?: any;
  lang?: any;
}

export const version: string;

export const locale: (l: any) => void;

export function install(vue: typeof Vue, options: InstallationOptions): void;

export declare class ActionSheet extends UIComponent { }
export declare class Badge extends UIComponent { }
export declare class Button extends UIComponent { }
export declare class ButtonGroup extends UIComponent { }
export declare class Calendar extends UIComponent { }
export declare class Cell extends UIComponent { }
export declare class CheckBox extends UIComponent { }
export declare class CheckBoxGroup extends UIComponent { }
export declare class Col extends UIComponent { }
export declare class DatePicker extends UIComponent { }
export declare class Dialog extends UIComponent { }
export declare class Flex extends UIComponent { }
export declare class Grid extends UIComponent { }
export declare class GridCol extends UIComponent { }
export declare class GridRow extends UIComponent { }
export declare class Icon extends UIComponent { }
export declare class ImagePicker extends UIComponent { }
export declare class Menu extends UIComponent { }
export declare class NavBar extends UIComponent { }
export declare class NoticeBar extends UIComponent { }
export declare class Picker extends UIComponent { }
export declare class Price extends UIComponent { }
export declare class Progress extends UIComponent { }
export declare class Radio extends UIComponent { }
export declare class RadioGroup extends UIComponent { }
export declare class Range extends UIComponent { }
export declare class Rate extends UIComponent { }
export declare class Row extends UIComponent { }
export declare class SearchBar extends UIComponent { }
export declare class ShortPassword extends UIComponent { }
export declare class Skeleton extends UIComponent { }
export declare class Slider extends UIComponent { }
export declare class Stepper extends UIComponent { }
export declare class Steps extends UIComponent { }
export declare class Swiper extends UIComponent { }
export declare class Switch extends UIComponent { }
export declare class Tab extends UIComponent { }
export declare class Tabbar extends UIComponent { }
export declare class TabPanel extends UIComponent { }
export declare class Toast extends UIComponent { }
export declare class BackTop extends UIComponent { }
export declare class Scroller extends UIComponent { }
export declare class CountDown extends UIComponent { }
export declare class Uploader extends UIComponent { }
export declare class TextInput extends UIComponent { }
export declare class TextBox extends UIComponent { }
export declare class Avatar extends UIComponent { }
export declare class Infiniteloading extends UIComponent { }
export declare class Lazyload extends UIComponent { }
export declare class Elevator extends UIComponent { }
export declare class LeftSlip extends UIComponent { }
export declare class TabSelect extends UIComponent { }
export declare class Popup extends UIComponent { }

export declare class LuckDraw extends UIComponent { }
export declare class Video extends UIComponent { }
export declare class Signature extends UIComponent { }
export declare class CircleProgress extends UIComponent { }
export declare class TimeLine extends UIComponent { }
export declare class TimeLineItem extends UIComponent { }
export declare class SideNavBar extends UIComponent { }
export declare class SubSideNavBar extends UIComponent { }
export declare class SideNavBarItem extends UIComponent { }
export declare class Qart extends UIComponent { }
export declare class Drag extends UIComponent { }
export declare class Address extends UIComponent { }
export declare class Notify extends UIComponent { }
export declare class CountUp extends UIComponent { }
