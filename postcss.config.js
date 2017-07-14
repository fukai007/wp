module.exports = {
  // parser: 'sugarss', 有这个会编译不过去不知道为什么-2017-06-23 15:52
  plugins: {
    'autoprefixer': {},
    'precss':{},
    // ['postcss-composes':{}, or postcss-inherit ]和 precss 冲突 -2017-06-23 16:26
  }
}
