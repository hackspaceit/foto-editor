export declare class ProgressTimeout {
    aliveTimer: any;
    isDone: boolean;
    timeout: number;
    timeoutHandler: (() => void) | null;
    progress(): void;
    done(): void;
}
