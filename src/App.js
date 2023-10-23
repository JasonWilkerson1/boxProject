import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import ImageCarousel from './ImageCarousel';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
      <ImageCarousel />
        <Section className="content-body"
          id="Donate"
          title="Mission Statement"
          
          content="To encourage and enrich the lives of families and individuals living in rural poverty by establishing meaningful relationships, promoting education, and offering material aid."
          isBlue={false}
        />
        <Section
          id="Contact Us"
          title="What We Do"
          content="The Box Project’s mission is to encourage and enrich the lives of families and individuals living in rural poverty by establishing meaningful relationships, promoting education, and offering material aid. Without YOUR direct participation in our program, achieving this goal would be nearly impossible. With your help, more and more families living in rural poverty can have the opportunity to improve their lives. Each family touched by the Box Project is one step closer to breaking the cycle of generational poverty in the MS Delta."
          isBlue={false}
        />
        <Section
          id="About"
          title="How We Work"
          content="The Box Project is a program of the Community Foundation of Northwest Mississippi, an accredited foundation with the Council on Foundations’ National Standards for U.S. Community Foundations. It is governed by the Community Foundation’s Board of Directors.  We encourage you to investigate before you donate. Click here to read more about the Community Foundation and its finances. Click here for more information about the Box Project and its relationship to the Community Foundation of Northwest Mississippi."
          isBlue={false}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
