import React, { Component } from 'react';


class Slider extends Component {

    constructor(props){
        super(props)
        // this.state = {
        //     items={IMAGE_DATA}
        //     speed={1.2}
        //     delay={2.1}
        //     pause={true}
        //     autoplay={true}
        //     dots={true}
        //     arrows={true}
        // }
    }
  render() {
    return (
      <div className="slider-container">
        <ul className="sliders">
            {
                this.props.items.map((item,index)=>
                    <li className="slider" key={index}>
                        <img src={item} alt=""/>
                    </li>
                )
            }
        </ul>
      </div>
    );
  }
}

export default Slider;