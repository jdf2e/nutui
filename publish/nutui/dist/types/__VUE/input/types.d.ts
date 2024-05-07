export type InputAlign = 'left' | 'center' | 'right';
export type InputFormatTrigger = 'onChange' | 'onBlur';
export type InputType = 'tel' | 'url' | 'date' | 'file' | 'text' | 'time' | 'week' | 'color' | 'digit' | 'email' | 'image' | 'month' | 'radio' | 'range' | 'reset' | 'button' | 'hidden' | 'number' | 'search' | 'submit' | 'checkbox' | 'password' | 'textarea' | 'datetime-local' | 'idcard' | 'nickname' | 'safe-password';
export type InputRule = {
    pattern?: RegExp;
    message?: string;
    required?: boolean;
};
export type InputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';
export interface InputTarget extends HTMLInputElement {
    composing?: boolean;
}
export interface InputEvent extends Event {
    detail: {
        value: any;
    };
}
