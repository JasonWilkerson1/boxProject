import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          id="Donate"
          title="Help"
          content="I wish you all have a great night today"
          isBlue={true}
        />
        <Section
          id="Contact Us"
          title="Section 2"
          content="Box project is about the help of the community."
          isBlue={false}
        />
        <Section
          id="About"
          title="Section 3"
          content="This is the content of Section 3."
          isBlue={true}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
