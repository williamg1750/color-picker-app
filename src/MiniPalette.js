import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map((curColor) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: curColor.color }}
      key={curColor.name}
    />
  ));

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

//this is an higher order component which takes MiniPalette and returns a new version with the "css styling" styles added to the props
export default withStyles(styles)(MiniPalette);
