interface Options {
    allowedInputSelector?: string;
}
export declare function useKeybind(el: HTMLElement | 'window', shortcut: string, userCallback: (e: KeyboardEvent) => void, { allowedInputSelector }?: Options): void;
export {};
