import React, { Component } from 'react';
import './App.css';

import Slider from './components/Slider'

class App extends Component {

  render() {
      let items =  [
        require('./images/index1.jpg'),
        require('./images/index2.jpg'),
        require('./images/index3.jpg'),
      ]
    return (
        /*
            items : images
            speed : speed
            delay : delay time to begin
            pasue : whther pause when mouse move to image
            auto  : whther auto play
            dots  : bottom indication is dot
            arrows: right indication is arrows
         */
        <Slider items={items}
                speed={1.2}
                delay={2.1}
                pause={true}
                auto={true}
                dots={true}
                arrows={true}
        />
    );
  }
}

export default App;
