export interface PlainRect {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
}
export declare function getBoundingClientRect(el: HTMLElement | Range): {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
};
