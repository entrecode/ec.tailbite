import React, { ReactNode } from 'react';
declare const Tab: {
    ({ children, className }: {
        children: ReactNode;
        className?: string | undefined;
    }): JSX.Element;
    Head({ children }: {
        children: any;
    }): JSX.Element;
    Content({ children }: {
        children: any;
    }): JSX.Element;
    Header({ title, active, onClick, icon }: TabHeaderProps): JSX.Element;
};
interface TabHeaderProps {
    title: string | ReactNode;
    active: boolean;
    onClick: () => void;
    icon?: React.ReactNode;
}
export default Tab;
