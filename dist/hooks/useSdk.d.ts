import { PublicAPI, Session } from 'ec.sdk';
import { environment as Environment, options as Options } from 'ec.sdk/lib/Core';
export interface UsePublicAPIProps {
    shortID: string;
    env?: Options | Environment;
    swrOptions?: any;
}
export declare function usePublicAPI(props: UsePublicAPIProps): import("swr").SWRResponse<PublicAPI, any>;
export declare function useSession(): {
    token: string | undefined;
    data?: Session | undefined;
    error?: any;
    mutate: import("swr").KeyedMutator<Session>;
    isValidating: boolean;
};
declare function useSdk(): {
    api: PublicAPI | undefined;
    token: string | undefined;
    apiResolved: boolean;
    accounts: import("ec.sdk").Accounts | undefined;
    session: Session | undefined;
    updateSession: () => () => Promise<void>;
};
export default useSdk;
