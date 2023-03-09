import './App.css';
import Cert from './components/Cert';
import Contact from './components/Contact';
import Home from './components/Home';
import MyStudy from './components/MyStudy';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Cert />
      <MyStudy />
      <Contact />
    </div>
  );
}

export default App;
