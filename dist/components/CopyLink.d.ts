import React from 'react';
/** Renders some clickable content to copy a given value to the clipboard. Shows a little clipboard icon next to the content. */
declare function CopyLink(props: {
    /** additional class names */
    className?: string;
    /** the string to copy */
    value?: string;
    /** content to click */
    children?: React.ReactNode;
    /** fallback content if no value is set */
    fallback?: React.ReactNode;
}): JSX.Element;
export declare function CopyLinkExample(): JSX.Element;
export default CopyLink;
