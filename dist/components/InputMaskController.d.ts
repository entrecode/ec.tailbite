import React from 'react';
import { ControllerProps } from 'react-hook-form';
export interface InputMaskControllerProps extends Omit<ControllerProps<any, any>, 'render'> {
    mask: string;
    children?: (inputProps: any) => React.ReactNode;
    placeholder: string;
}
declare function InputMaskController(props: InputMaskControllerProps): JSX.Element;
export default InputMaskController;
