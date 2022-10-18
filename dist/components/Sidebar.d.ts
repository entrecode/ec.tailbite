import React from 'react';
declare function Sidebar({ children, open, onClose, backdrop, className, }: {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    backdrop?: boolean;
    className?: string;
}): JSX.Element;
declare namespace Sidebar {
    var Head: ({ children }: any) => JSX.Element;
    var Heading: ({ children }: any) => JSX.Element;
    var X: ({ onClose }: any) => JSX.Element;
    var Body: ({ children }: any) => JSX.Element;
}
export default Sidebar;
export declare function SidebarExample(): JSX.Element;
