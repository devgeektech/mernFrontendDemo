import Layout from './resources/layouts';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Switch>
        <Layout />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
