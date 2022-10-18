declare function Ixo(props: any): JSX.Element;
declare namespace Ixo {
    var Toggle: ({ icon, tooltip, placement, value, onClick, }: {
        icon: string;
        tooltip?: string | undefined;
        placement?: "left" | "right" | "top" | "bottom" | undefined;
        value: boolean;
        onClick: () => void;
    }) => JSX.Element;
    var Icon: (props: any) => JSX.Element;
}
export default Ixo;
