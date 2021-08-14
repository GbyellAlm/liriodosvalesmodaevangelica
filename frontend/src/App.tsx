import './core/assets/styles/custom.scss';
import './app.scss';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
