import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Auth0Provider } from "@auth0/auth0-react";






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-qwam0pm8hqpp05ts.us.auth0.com"
    clientId="hrRwF1FT2dF072FhPLJ9ZLhhlY6dz7Dt"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);


