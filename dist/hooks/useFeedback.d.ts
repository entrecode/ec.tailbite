declare function defaultGetErrorMessage(error: any): any;
declare function useFeedback(): {
    notifications: {
        emit: ({ type, message, title }: {
            type?: "success" | "error" | undefined;
            message?: string | undefined;
            title?: string | undefined;
        }) => void;
    };
    withFeedback: (fn: any, { success, error, getErrorMessage }: {
        success: any;
        error: any;
        getErrorMessage?: typeof defaultGetErrorMessage | undefined;
    }) => Promise<void>;
    withPending: (fn: any) => Promise<void>;
    pending: boolean;
};
export default useFeedback;
