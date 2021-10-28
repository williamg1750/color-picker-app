import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  colors: {
    height: '90%',
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    opacity: 1,
    backgroundColor: 'black',
    '& a': {
      color: 'white',
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none',
    },
  },
};

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex' };
    this.changeFormat = this.changeFormat.bind(this);
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

  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = this._shades.map((curColor) => (
      <ColorBox
        key={curColor.name}
        name={curColor.name}
        background={curColor[format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <NavBar handleChange={this.changeFormat} showingAllColors={false} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>GO BACK</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default withStyles(styles)(SingleColorPalette);
