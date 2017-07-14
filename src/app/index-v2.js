/*
  异步加载测试 2017-06-23 13:25
*/
import Es6Promise from 'es6-promise';
Es6Promise.polyfill();

function determineDate() {
  import('moment')
    .then(moment => moment().format('LLLL'))
    .then(str => console.log(str))
    .catch(err => console.log('Failed to load moment', err));
}

determineDate();
