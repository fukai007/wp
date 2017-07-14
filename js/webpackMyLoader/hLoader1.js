const loaderUtils = require("loader-utils");

/*
  1、返回一个字符串
  2、source 是一个对象
*/
module.exports = function(source) {
  console.log('-------------------------hLoader-1-start----------------------------->');
  console.log('source-1-->', source);
  console.log('-------------------------hLoader-1-end----------------------------->');
  return "sdfjslkdjfljsdlfjlsdfj----------------1";
};
