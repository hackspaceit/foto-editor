interface Options {
    id?: string;
    force?: boolean;
    type?: 'js' | 'css';
    parentEl?: HTMLElement;
    document?: Document;
}
declare class LazyLoader {
    private loadedAssets;
    loadAsset(url: string, params?: Options): Promise<any>;
    /**
     * Check whether asset is loading or has already loaded.
     */
    isLoadingOrLoaded(url: string): boolean;
    private loadStyleAsset;
    private loadScriptAsset;
}
declare const _default: LazyLoader;
export default _default;
