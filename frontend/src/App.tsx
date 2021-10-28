import './core/assets/styles/custom.scss';
import './app.scss';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';
import ReactGA from 'react-ga';

function App() {
  const TRACKING_ID = "G-P7N1CMRFMG"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
