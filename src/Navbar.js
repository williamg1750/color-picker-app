import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
//material UI componenets
//dropdown
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
//snackbar
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showingAllColors } = this.props;
    const { format } = this.state;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <Link to='/'>React Color Picker</Link>
        </div>

        <div className='slider'>
          {showingAllColors && (
            <div className='slider-container'>
              <span>Level : {level}</span>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          )}
        </div>
        <div className='select-container'>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value='hex'>Hex - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgb(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
          message={
            <span className='message-id'>
              Format Changed To {format.toUpperCase()}
            </span>
          }
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>,
          ]}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
        />
      </header>
    );
  }
}
export default Navbar;
