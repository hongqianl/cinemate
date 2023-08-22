import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from './components';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Header/>
          <ScrollToTop/>
          <AllRoutes/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
