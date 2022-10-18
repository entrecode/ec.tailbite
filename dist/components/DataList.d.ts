declare function DataList({ children, cols }: any): JSX.Element;
declare namespace DataList {
    var Item: ({ children }: {
        children: any;
    }) => JSX.Element;
    var Header: ({ children }: {
        children: any;
    }) => JSX.Element;
    var Body: ({ children }: {
        children: any;
    }) => JSX.Element;
}
export declare const DataListItem: ({ children }: {
    children: any;
}) => JSX.Element;
export declare const DataListHeader: ({ children }: {
    children: any;
}) => JSX.Element;
export declare const DataListBody: ({ children }: {
    children: any;
}) => JSX.Element;
export default DataList;
export declare function DataListExample(): JSX.Element;
