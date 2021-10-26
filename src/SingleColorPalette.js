import React, { Component } from 'react';
import ColorBox from './ColorBox';
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shades);
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    console.log(allColors);
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((curColor) => curColor.id === colorToFilterBy)
      );
    }
    //return arry without the oth index which is pure white
    return shades.slice(1);
  }
  render() {
    const colorBoxes = this._shades.map((curColor) => (
      <ColorBox
        key={curColor.name}
        name={curColor.name}
        background={curColor.hex}
        showLink={false}
      />
    ));
    return (
      <div className='Palette'>
        <h1>Single Color Palette</h1>
        <div className='Palette-colors'>{colorBoxes}</div>
      </div>
    );
  }
}
export default SingleColorPalette;
