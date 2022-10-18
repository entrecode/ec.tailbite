import React from 'react';
/** External Link with icon */
declare function ExternalLink(props: {
    /** URL */
    href: string;
    /** Additional class name */
    className?: string;
    /** Link content */
    children?: React.ReactNode;
    /** fallback content if no href given */
    fallback?: React.ReactNode;
    target?: '_blank' | string;
}): JSX.Element;
export default ExternalLink;
