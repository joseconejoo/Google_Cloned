import React from 'react';
//import { ReactComponent } from '*.svg';
import './App.css';
import GHeader1 from './google/GHeader1';
import Body1 from './google/body';
import Footer1 from './google/footer';

class App extends React.Component {

  render() {
    return <div>
      
      <GHeader1 />
      <Body1 />
      <Footer1 />
    </div>
  }
}

export default App;
