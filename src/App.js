import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import { Switch, Route } from 'react-router-dom';
import Palettelist from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    //remember to pass in route props if you are going to use history,match or location you will need route props passes in RENDER and also decontruct in the props
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={(routeProps) => (
              <Palettelist palettes={seedColors} {...routeProps} />
            )}
          />
          <Route
            exact
            path='/palette/:id'
            render={(routeProps) => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
          <Route
            exact
            path='/palette/:paletteId/:colorId'
            render={(routeProps) => <SingleColorPalette />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
