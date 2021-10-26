import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(newLvl) {
    this.setState({ level: newLvl });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    let colorBoxes = colors[level].map((currColor) => (
      <ColorBox
        background={currColor[format]}
        name={currColor.name}
        key={currColor.id}
        moreUrl={`${id}/${currColor.id}`}
        showlink={true}
      />
    ));

    return (
      <div className='Palette'>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className='Palette-colors'>
          {/*bunch of color boxes goes here*/}
          {colorBoxes}
        </div>
        <footer className='Palette-footer'>
          {paletteName}
          <span>{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
