import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import SocialLinks from './component/SocialLinks';
import About from './component/About';
import Portfolio from './component/PortFolio';
import Experience from './component/Experience';
import Contact from './component/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
