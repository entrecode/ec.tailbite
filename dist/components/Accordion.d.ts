declare const Accordion: {
    ({ children, className, }: {
        children: any;
        /** Additional Classes for outer div */
        className?: string | undefined;
    }): JSX.Element;
    Item: ({ children, $first, $last, }: {
        /** If true, the item will be opened by default */
        children: any;
        $first?: boolean | undefined;
        $last?: boolean | undefined;
    }) => JSX.Element;
    Head: ({ children, }: {
        /** Label */
        children: string;
    }) => JSX.Element;
    Body: ({ children, className, }: {
        children: any;
        /** Additional Classes for outer div  */
        className?: string | undefined;
    }) => JSX.Element;
    Example(): JSX.Element;
};
export declare const AccordionItem: ({ children, $first, $last, }: {
    /** If true, the item will be opened by default */
    children: any;
    $first?: boolean | undefined;
    $last?: boolean | undefined;
}) => JSX.Element;
export declare const AccordionHead: ({ children, }: {
    /** Label */
    children: string;
}) => JSX.Element;
export declare const AccordionBody: ({ children, className, }: {
    children: any;
    /** Additional Classes for outer div  */
    className?: string | undefined;
}) => JSX.Element;
export default Accordion;
