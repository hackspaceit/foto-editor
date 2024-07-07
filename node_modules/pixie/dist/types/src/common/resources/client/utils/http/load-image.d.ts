/**
 * Load image avoiding xhr/fetch CORS issues. Server status can't be obtained this way
 * unfortunately, so this uses "naturalWidth" to determine if the image has been loaded. By
 * default, it checks if it is at least 1px.
 */
export declare const loadImage: (src: string, minWidth?: number) => Promise<HTMLImageElement>;
