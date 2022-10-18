/** Searchbar input
 *
 * ```jsx
 * const [value, setValue] = useState('');
 * function App() {
 *   return (<Searchbar value={value} onChange={setValue} placeholder="Suche....." />);
 * }
 * ```
 *
 *
 */
declare function Searchbar(props: {
    onChange: (value: string) => void;
    value?: string;
    placeholder?: string;
    inputClassName?: string;
    onSearchClick?: () => void;
    autoFocus?: boolean;
}): JSX.Element;
export default Searchbar;
export declare function SearchbarExample(): JSX.Element;
