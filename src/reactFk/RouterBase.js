import React, { Component } from 'react';
import {
  //BrowserRouter as Router,
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';

import { push,ConnectedRouter} from 'react-router-redux'
console.log('ConnectedRouter------------------>', ConnectedRouter);
import {
  store,
  browserHistory,
} from '../fw/store/store';
import H1 from '../components/H1/H1.js';
class  RouterBase extends Component {
  createAction(item,type){
      return {
        ...item,type
      }
  }

  toWhere = ()=>{
    console.log('this', this);
    store.dispatch(push('/topics'));
    store.dispatch( this.createAction({m:101},"add") );
  }

  getUser= ()=>{
    store.dispatch( this.createAction({m:101},"fetchUser") );
  }

  render() {
    return (
      <Provider store={store}>
          { /* Tell the Router to use our enhanced history ,可以不加 history-2017-06-26 17:08:52*/ }
         <ConnectedRouter history={browserHistory}>
          <div>
            <H1/>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
              <li><div onClick={this.toWhere}>click--->Topics---toWhere</div></li>
              <li><div onClick={this.getUser}>click--->Topics---getUser</div></li>
            </ul>
            <hr/>
           <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/topics" component={Topics}/>
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }

}

const Home = () => (
  <div>
    <H1/>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default RouterBase
