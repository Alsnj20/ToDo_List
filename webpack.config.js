module.exports = {
  entry:{
    index: './src/index.js'
  },
  output:{
    filename: './script/[name].bundle.js',
    path: __dirname + '/dist',
    clean: true,
  }
}