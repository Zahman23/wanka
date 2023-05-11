import React from 'react';

// import components
import Header from './components/navbar/Header';
import Hero from './components/main/Hero';
import About from './components/about/About';
import Layanan from './components/layanan/Layanan';
import Sample from './components/sample/Sample';
import Footer from './components/footer/.Footer';

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Layanan />
      <Sample />
      <Footer />
    </main>
  );
};

export default App;
