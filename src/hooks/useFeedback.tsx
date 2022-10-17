import { useState } from 'react';
import useNotifications from './useNotifications';

function defaultGetErrorMessage(error) {
  if (typeof error === 'string') {
    return error;
  }
  if (typeof error.message === 'string') {
    return error.message;
  }
  return 'Unknown error';
}

// for easier refactoring later..
function useFeedback() {
  const [pending, setPending] = useState(false);
  const notifications = useNotifications();
  const withFeedback = async (fn, { success, error, getErrorMessage = defaultGetErrorMessage }) => {
    try {
      setPending(true);
      await fn();
      notifications.emit({
        type: 'success',
        title: success,
      });
    } catch (err) {
      const message = getErrorMessage(err);
      console.error(message);
      console.dir(err);
      notifications.emit({
        type: 'error',
        title: error,
        message,
      });
    }
    setPending(false);
  };
  const withPending = async (fn) => {
    setPending(true);
    await fn();
    setPending(false);
  };
  return { notifications, withFeedback, withPending, pending };
}

export default useFeedback;
