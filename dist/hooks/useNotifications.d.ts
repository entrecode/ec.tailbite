/**
 * Hook helps to migrate from Angular NotificationService to react-hot-toast
 * Use Hot Toast API for more Options https://github.com/timolins/react-hot-toast
 *
 * @example ```js
 *   import useNotifications from '../hooks/useNotifications';
 *   ...
 *   notifications.emit({
 *         type: 'success',
 *         title: 'Test',
 *         message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel',
 *       }
 *  ```
 */
declare function useNotifications(): {
    emit: ({ type, message, title }: {
        type?: "success" | "error" | undefined;
        message?: string | undefined;
        title?: string | undefined;
    }) => void;
};
export default useNotifications;
