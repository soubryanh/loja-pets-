import './App.css';
import {
  About,
  Header,
  Products,
  Services,
  Contact,
  Navbar,
} from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <About />
      <Products />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
