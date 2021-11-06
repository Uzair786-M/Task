import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Domain from './Components/Domain/Domain';
import Price from './Components/Price/Price';
import Value from './Components/Value/Value';
import Tryus from './Components/Tryus/Tryus';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Domain />
      <Price />
      <Value />
      <Tryus />
      <Footer />
    </>
  )
}


export default App;
