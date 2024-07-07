export declare const AccordionAnimation: {
    readonly variants: {
        readonly open: {
            readonly height: "auto";
            readonly visibility: "visible";
            readonly transitionEnd: {
                readonly overflow: "auto";
            };
        };
        readonly closed: {
            readonly height: 0;
            readonly overflow: "hidden";
            readonly transitionEnd: {
                readonly visibility: "hidden";
            };
        };
    };
    readonly transition: {
        readonly type: "tween";
        readonly duration: 0.2;
    };
};
