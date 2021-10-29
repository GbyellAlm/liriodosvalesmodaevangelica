import './core/assets/styles/custom.scss';
import './app.scss';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';
//import GA4React from "ga-4-react";

//const ga4react = new GA4React("G-9T6HQD8EJV");

function App() {
  //ga4react.initialize();

  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
