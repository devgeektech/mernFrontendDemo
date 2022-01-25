import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';
import { isLogin } from '../../utils/helpers';

const Layout = () => {
  const checkIsLogin = isLogin();
  if (checkIsLogin) return <Authenticated />;
  else return <Unauthenticated />;
};

export default Layout;
