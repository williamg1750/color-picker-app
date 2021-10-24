import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import { Switch, Route, Link } from 'react-router-dom';
import Palettelist from './PaletteList';

class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    console.log(seedColors);
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Palettelist palettes={seedColors} />}
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
        </Switch>
      </div>
    );
  }
}

export default App;
