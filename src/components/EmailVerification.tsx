import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import environment from '../environment';
import useNotifications from '../hooks/useNotifications';
import Button from './Button';
import LocalLoader from './LocalLoader';

export default function EmailVerification({ abort = false }: any) {
  const notifications = useNotifications();
  const [message, setMessage] = React.useState('');
  const { jwt } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!jwt) {
      console.warn('navigate login');
      navigate('/login');
    }
  }, [jwt]);

  useEffect(() => {
    try {
      if (jwt) {
        if (abort) {
          console.log('abort');

          fetch(`${environment.accountServerUrl}/auth/email-verification/abort/${jwt}`, {
            method: 'GET',
          }).then((resp) => {
            if (resp.ok) {
              setMessage('E-Mail erfolgreich zurückgesetzt');
              notifications.emit({
                type: 'success',
                title: 'E-Mail erfolgreich zurückgesetzt',
              });
            } else {
              setMessage('E-Mail konnte nicht zurückgesetzt werden');
              notifications.emit({
                type: 'error',
                title: 'Etwas ist schiefgelaufen',
              });
            }
          });

          return;
        }

        fetch(`${environment.accountServerUrl}/auth/email-verification/${jwt}`, {
          method: 'GET',
        }).then((resp) => {
          if (resp.ok) {
            setMessage('E-Mail erfolgreich bestätigt');
            notifications.emit({
              type: 'success',
              title: 'E-Mail erfolgreich verifiziert',
            });
          } else {
            setMessage('E-Mail konnte nicht verifiziert werden');
            notifications.emit({
              type: 'error',
              title: 'Etwas ist schiefgelaufen',
            });
          }
        });
      }
    } catch (e) {
      console.log(e);
      notifications.emit({
        type: 'error',
        title: 'Etwas ist schiefgelaufen',
      });
    }
  }, [abort, jwt]);

  return (
    <div className="flex gap-4 h-screen items-center justify-center">
      {message ? (
        <div className="flex flex-col justify-center items-center gap-3">
          <h2>{message}</h2>
          <Button $primary onClick={() => navigate('/login')}>
            Zurück zum Login
          </Button>
        </div>
      ) : (
        <>
          <h2>{abort ? 'Bestätigung der Email Adresse wird Abgebrochen' : 'Email Adresse wird bestätigt'}</h2>
          <LocalLoader />
        </>
      )}
    </div>
  );
}
