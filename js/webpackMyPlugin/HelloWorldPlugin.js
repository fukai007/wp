//构造器
function HelloWorldPlugin(options) {
  // Setup the plugin instance with options...
}

//对象的一个方法
HelloWorldPlugin.prototype.apply = function(compiler) {
  //无效的
  compiler.plugin('parser', function() {
    console.log('HelloWorldPlugin----------------parser------------------->Hello World!');
  });

  compiler.plugin('compile', function() {
    console.log('HelloWorldPlugin----------------compile------------------->Hello World!');
  });

  compiler.plugin('compilation', function() {
    console.log('HelloWorldPlugin----------------compilation------------------->Hello World!');
  });


  // make 如果监听会报错
  compiler.plugin('done', function() {
    console.log('HelloWorldPlugin----------------done------------------->Hello World!');
  });
};

module.exports = HelloWorldPlugin;
