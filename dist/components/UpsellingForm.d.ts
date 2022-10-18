declare function UpsellingForm({ purchases, onSubmit, onDelete, defaultValues }: any): JSX.Element;
export default UpsellingForm;
declare interface InAppConfig {
    ios: string;
    android: string;
}
declare interface HectorConfig {
    [backendId: string]: string;
}
export declare interface UpsellingEntry {
    id: string;
    module: string;
    type: 'inapp' | 'hector';
    title: string;
    textConfig: any;
    config: InAppConfig | HectorConfig;
    save: any;
    del: any;
    bookable: boolean;
}
