import React from 'react';
import {render} from 'react-dom';
import H1 from '../components/H1/H1';
import RouterBase from '../reactFk/RouterBase';

console.log('index------>title');
//增加 router 功能
class App extends React.Component {
    render() {
        return (
            <div>
              <h1>Yo, React Block</h1>
            </div>
        )
    }
}



render(<RouterBase/>, document.getElementById('app'));
