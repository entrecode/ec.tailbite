import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useNotifications from '../hooks/useNotifications';
import { useTailbite } from './Tailbite';

export default function PasswordReset({ abort = false }: any) {
  const notifications = useNotifications();
  const environment = useTailbite();
  const { jwt } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!jwt) {
      console.warn('navigate login');
      navigate('/login');
    }
  }, [jwt]);

  const abortReset = useCallback(() => {
    return fetch(`${environment.accountServerUrl}/auth/password-reset/abort/${jwt}`, {
      method: 'GET',
    })
      .then((resp) => {
        if (resp.ok) {
          resp.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((res) => {
        notifications.emit({
          type: 'success',
          title: 'Passwort Reset Abgebrochen',
        });
        window.open('/login', '_self');
      })
      .catch(() => {
        notifications.emit({
          type: 'error',
          title: 'Etwas ist schiefgelaufen',
        });
        window.open('/login', '_self');
      });
  }, [jwt, notifications]);

  useEffect(() => {
    if (abort) {
      abortReset();
    }
  }, [abort]);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    defaultValues: {
      password: '',
    },
    mode: 'onChange',
  });

  const [forgot, setForgot] = React.useState(false);

  async function resetPassword({ password }) {
    try {
      let response = await fetch(`${environment.accountServerUrl}/auth/password-reset/callback/${jwt}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        body: 'password=' + password,
      });
      notifications.emit({
        type: 'success',
        title: 'Passwort wurde geändert',
        message: 'Du kannst dich nun einloggen',
      });
      navigate('/');
    } catch (error: any) {
      notifications.emit({
        type: 'error',
        title: 'Passwort konnte nicht geändert werden',
        message: error.message,
      });
    }
  }

  return (
    <div className="h-screen bg-white dark:bg-gray-700">
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <svg className="h-12 w-12">
                <use xlinkHref="#ca-logo" className="fill-current text-gray-900 dark:text-gray-100" />
              </svg>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                Setzte dein Password zurück
              </h2>
            </div>

            <div className="mt-8">
              <div>
                <form onSubmit={handleSubmit(resetPassword)} className="space-y-6">
                  {!forgot && (
                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                        Neues Passwort
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          type="password"
                          autoComplete="current-password"
                          {...register('password', {
                            required: true,
                            minLength: {
                              value: 3,
                              message: 'Das Passwort ist zu kurz',
                            },
                          })}
                          className="appearance-none block w-full px-3 py-2 border text-gray-900 border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.password && (
                          <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.password.message}</p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex items-end">
                    <div className="text-sm">
                      <a
                        onClick={() => abortReset()}
                        className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
                      >
                        Passwort Reset abbrechen
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting || !isValid}
                      className="disabled:opacity-75 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Passwort zurücksetzen
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover object-top mix-blend-exclusion"
            src="/img/admin-bg.jpeg"
          />
        </div>
      </div>
    </div>
  );
}
