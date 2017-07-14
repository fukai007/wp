import { createEpicMiddleware } from  'redux-observable';
import { combineEpics } from 'redux-observable';
import 'rxjs'; //不引入则ofType报错，没有定义
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';

const fetchUserFulfilled = payload => ({ type: 'add',payload});

const pingEpic = action$ =>
  action$.ofType('add')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'cut',m:21 });


/*
    @PS
      map 可以实现 then的功能
      catch 1、可拦截 异常 。2、catch 必须在最后面
*/
const fetchUserEpic = action$ =>{
  console.log('action$-------->', window.act = action$);
  return action$.ofType('fetchUser').mergeMap(action =>{
      console.log(window.tajax = ajax,action);
      return ajax.getJSON('/mockData/a.json')
      .map(response =>{
        console.log('response-------------->', response);
        return {
            m : 100+response.m
        }
      })
      .map(response =>{
        return {
            m : response.m+200
        }
      })
      .map(response => fetchUserFulfilled(response))
      .catch(error => Observable.of(
          fetchUserFulfilled(error)
      ))
    }
  )
}

//const epicMiddlewareA = createEpicMiddleware(pingEpic);
//console.log('epics------>epicMiddlewareA', epicMiddlewareA);

//合并后，变成中间件
export default createEpicMiddleware(combineEpics(pingEpic,fetchUserEpic));
