interface Event {
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}
export declare function isCtrlOrShiftPressed(e: Event): boolean;
export {};
