import React from 'react';
declare function Modal({ children, open, onClose, className, }: {
    children: React.ReactNode;
    open?: boolean;
    onClose?: (any: any) => any;
    className?: string;
}): JSX.Element;
declare namespace Modal {
    var Buttons: import("tailwind-styled-components/dist/tailwind").TailwindComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any>;
}
export default Modal;
export declare function ModalExample(): JSX.Element;
