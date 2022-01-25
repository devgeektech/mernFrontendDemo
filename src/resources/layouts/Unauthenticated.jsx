import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from '../pages/Login';
import SetPasswordPage from '../pages/SetPassword';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import ResetUserPassword from '../pages/ResetUserPassword';
import { Route } from 'react-router-dom';

const UnauthenticatedLayout = () => {
  return (
    <>
      <Route path="/login" exact={true}>
        <LoginPage />
      </Route>
      <Route path="/forgot-password" exact={true}>
        <ForgotPassword />
      </Route>
      <Route path="/set-password/:id" exact={true}>
        <SetPasswordPage />
      </Route>
      <Route path="/reset-password/:id" exact={true}>
        <ResetPassword />
      </Route>
	  <Route path="/reset-user-password/:id" exact={true}>
        <ResetUserPassword />
      </Route>
      <Route path="/" exact={true}>
        <LoginPage />
      </Route>
    </>
  );
};

export default UnauthenticatedLayout;
