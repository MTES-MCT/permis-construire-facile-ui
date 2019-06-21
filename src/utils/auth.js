import api from 'utils/api';

function handleAuth() {
  return api.then(api => {
    return api.default.auth;
  });
}

function getUser() {
  return api.then(handleAuth).then(auth => {
    return auth.getUser();
  });
}

function isAuthenticated() {
  return api.then(handleAuth).then(auth => {
    return auth.isAuthenticated();
  });
}

function login() {
  return api.then(handleAuth).then(auth => {
    return auth.login();
  });
}

function logout() {
  return api.then(handleAuth).then(auth => {
    return auth.logout();
  });
}

const auth = {
  login,
  logout,
  isAuthenticated,
  getUser
};

export default auth;