/** placeholder for empty lists with action button to add something */
declare function EmptyList({ label, action, }: {
    /** button label (suffixed by "erstellen") */
    label: string;
    /** button action */
    action: () => void;
}): JSX.Element;
export default EmptyList;
export declare function EmptyListExample(): JSX.Element;
