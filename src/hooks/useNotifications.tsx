import toast from 'react-hot-toast';

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
function useNotifications() {
  return {
    emit: ({ type = 'success', message, title }: { type?: 'success' | 'error'; message?: string; title?: string }) => {
      toast[type]([title, message] as any);
    },
  };
}

export default useNotifications;
