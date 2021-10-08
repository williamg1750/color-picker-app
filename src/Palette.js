import React, { Component } from 'react';
import ColorBox from './ColorBox';

class Palette extends Component {
  render() {
    let colorBoxes = this.props.colors.map((currColor) => (
      <ColorBox
        background={currColor.color}
        name={currColor.name}
        key={currColor.color}
      />
    ));
    return (
      <div className='Palette'>
        {/*navbar goes here*/}
        <div className='Palette-colors'>
          {/*bunch of color boxes goes here*/}
          {colorBoxes}
        </div>
        {/*Footer goes here*/}
      </div>
    );
  }
}

export default Palette;
