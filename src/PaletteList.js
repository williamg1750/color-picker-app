import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { palettes } = this.props;
    console.log(palettes);
    return (
      <div>
        <h1>React Colors</h1>
        {palettes.map((curPalette) => (
          <MiniPalette {...curPalette} />
        ))}
      </div>
    );
  }
}
export default PaletteList;
