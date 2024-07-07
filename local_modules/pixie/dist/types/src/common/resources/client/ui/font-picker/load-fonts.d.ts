import { FontFaceConfig } from './font-face-config';
import { FontConfig } from '@common/http/value-lists';
export declare function loadFonts(fonts: (FontFaceConfig | FontConfig)[], options: {
    prefixSrc?: (src?: string) => string;
    id: string;
    forceAssetLoad?: boolean;
    document?: Document;
    weights?: number[];
}): Promise<FontFace[]>;
