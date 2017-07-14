//import { browserHistory } from 'react-router'; react-router在4.0.0以后就作废了，具体版本不知道-2017-04-04
//import createHistory from 'history/createBrowserHistory'; //新的解决方案-2017-04-04


import React from 'react';
import 'rxjs'; //不引入则ofType报错，没有定义
import { compose } from 'redux'; // and your other imports from before
import { createStore,applyMiddleware,combineReducers} from 'redux';
import createHistory from 'history/createBrowserHistory'; //新的解决方案-2017-04-04
import { routerMiddleware,routerReducer } from 'react-router-redux';
import combineEpicsFK from '../epics/epicsA';
//console.log('epicMiddlewareA', epicMiddlewareA);
let  reducerA=(store={},action)=>{
      if(action.type == "add" ){
        console.log('action---reducerA---->add---run-----',action);
        store.m = store.m + action.m;
        //必须返回一个新的对象要不然不能触发更新!!!!!-2017-04-03 15:30:13-6个小时才发现问题
        return {
            ...store
        }
      }
      if(action.type == "cut" ){
        console.log('action---reducerA---->cut---run-----',action);
        store.m = store.m - action.m;
        //必须返回一个新的对象要不然不能触发更新!!!!!-2017-04-03 15:30:13-6个小时才发现问题
        return {
            ...store
        }
      }
      if(action.type == "fetchUser"){
        console.log('action---reducerA---->fetchUser---run-----',action);
        store.m = 0;
        //必须返回一个新的对象要不然不能触发更新!!!!!-2017-04-03 15:30:13-6个小时才发现问题
        return {
            ...store
        }
      }

      //不返回 会有问题,因为第一次会执行 会执行reducer
      return store
}

let  reducerB=(store={},action)=>{
      if(action.type == "move" ){
        console.log('action---reducerB---->add---run-----',action);
        store.m = store.m +10;
        //必须返回一个新的对象要不然不能触发更新!!!!!-2017-04-03 15:30:13-6个小时才发现问题
        return {
            ...store
        }
      }
      //不返回 会有问题,因为第一次会执行 会执行reducer
      return store
}



const logger = store => next => action => {
  console.log('dispatching---1', action);
  let result = next(action);
  console.log('next state---1', store.getState());
  return result;
}


//createStore(rootReducer,{m:100,n:"miles"},applyMiddleware(logger,logger2));

/*----------------------------设置react-router-开始-------------------------------*/
const history = createHistory();
const bhmiddleware = routerMiddleware(history);
history.listen(location=>{
    console.log('history------------------------location--->', location);
});
/*----------------------------设置react-router-结束-------------------------------*/

/*----------------------------设置redux-合并-开始-------------------------------*/
let rootReducer = combineReducers({ra:reducerA,rb:reducerB,router: routerReducer});
/*----------------------------设置redux-合并-结束-------------------------------*/

/*----------------------------设置devTool-store兼容性-开始-测试已通过------------------------------*/
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(bhmiddleware,combineEpicsFK),
);
/*----------------------------设置devTool-store兼容性-开始-测试已通过------------------------------*/

/*----------------------------创建redux-store-开始-------------------------------*/
//enhancer
let store = createStore(
  rootReducer,
  {ra:{m:100,n:"miles-ra"},rb:{m:200,n:"miles-rb"}},
  enhancer
);
// store.subscribe(()=>{console.log(store.getState())});
/*----------------------------创建redux-store-结束-------------------------------*/

export default store;
