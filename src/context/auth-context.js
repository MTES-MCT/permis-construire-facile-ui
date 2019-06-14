import React from 'react';
import auth from 'utils/auth';
import { useAsync } from 'react-async';
import { bootstrapAppData } from 'utils/bootstrap';
import LinearProgress from '@material-ui/core/LinearProgress';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);
  const {
    data = {
      user: auth.getUser(),
      isAuthenticated: auth.isAuthenticated(),
      dossiers: []
    },
    error,
    isRejected,
    isPending,
    isSettled,
    reload
  } = useAsync({
    promiseFn: bootstrapAppData
  });

  React.useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true);
    }
  }, [isSettled]);

  if (!firstAttemptFinished) {
    if (isPending) {
      return <LinearProgress />;
    }
    if (isRejected) {
      return (
        <div css={{ color: 'red' }}>
          <p>{`Oops un problème est survenu au démarrage. Tentez de rafraîchir la page.`}</p>
          <pre>{error.message}</pre>
        </div>
      );
    }
  }

  const login = (email, password) => auth.login(email, password).then(reload);
  const register = form => auth.register(form).then(reload);
  const logout = () => auth.logout().then(reload);

  return (
    <AuthContext.Provider
      value={{ data, login, logout, register }}
      {...props}
    />
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };