import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Content from './Content.js';

function Mydemosite() {
  return (
    <div>
      <Header />
      <Footer />
      <Content />
    </div>
  );
}

ReactDOM.render(<Mydemosite />, document.getElementById('root'));
