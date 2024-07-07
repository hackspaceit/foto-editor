type InteractionName = null | 'resize' | 'rotate' | 'drag' | 'move';
export declare let activeInteraction: InteractionName;
export declare function setActiveInteraction(name: InteractionName): void;
export {};
