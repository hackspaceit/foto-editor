export type ShareableNetworks = 'facebook' | 'twitter' | 'pinterest' | 'tumblr' | 'blogger' | 'mail';
export declare function shareLinkSocially(network: ShareableNetworks, link: string, name?: string, image?: string): void;
