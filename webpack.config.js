const path = require('path');

module.exports = {
  mode: 'development',
  entry:{
    index: './src/index.js'
  },
  output:{
    filename: './script/[name].bundle.js',
    path: __dirname + '/dist',
    clean: false,
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options:{
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}