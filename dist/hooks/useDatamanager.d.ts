import { DataManager } from 'ec.sdk';
declare function useDatamanager(): import("swr").SWRResponse<DataManager, any>;
export declare function useDatamanagerResource(): import("swr").SWRResponse<import("ec.sdk/lib/resources/datamanager/DataManagerResource").default, any>;
export default useDatamanager;
