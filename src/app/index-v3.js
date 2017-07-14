import _ from 'lodash';
import moment from 'moment';
import Block from '../reactFk/Block';
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
              <h1>Yo, React Block</h1>
              <Block/>
            </div>
        )
    }
}

function component () {
  var element = document.createElement('div');
  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack',moment().format()], '--++-->');
  return element;
}

document.body.appendChild(component());
let delay = 400;
setTimeout(() => {
  render(<App />, document.getElementById('app'));
},delay)
