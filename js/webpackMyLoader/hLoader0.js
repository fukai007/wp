const loaderUtils = require("loader-utils");

/*
  1、返回一个字符串
  2、source 是一个对象
*/
module.exports = function(source) {
  console.log('-------------------------hLoader-start-0----------------------------->');
  // console.log('source', source);

  console.log('source.length', source.length);
  var cls = source.split('\n');
  cls.forEach(elem => {
        console.log('elem------------------------->',elem);
  });
  console.log('this.query-------------------------->', this.query);
  console.log('this.data---------------------------->', this.data);
  console.log('this.loaderIndex--------------------->',this.loaderIndex);
  // console.log('this-------------------------->',this);
  // console.log("const cb = this.async()------------->",this.async);
  console.log('-------------------------hLoader-end-0---------------------------->');
  return "sdfjslkdjfljsdlfjlsdfj";
};
