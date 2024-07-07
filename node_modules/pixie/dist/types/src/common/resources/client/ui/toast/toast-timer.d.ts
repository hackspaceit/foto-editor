export declare class ToastTimer {
    private callback;
    private remaining;
    private timerId?;
    private createdAt;
    constructor(callback: () => void, remaining: number);
    pause(): void;
    resume(): void;
    clear(): void;
}
