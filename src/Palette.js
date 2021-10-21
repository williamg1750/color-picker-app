import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(newLvl) {
    this.setState({ level: newLvl });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    let colorBoxes = colors[level].map((currColor) => (
      <ColorBox
        background={currColor.hex}
        name={currColor.name}
        key={currColor.hex}
      />
    ));

    return (
      <div className='Palette'>
        {/*navbar goes here*/}
        <Navbar level={level} changeLevel={this.changeLevel} />
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
