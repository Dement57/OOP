const path = require('path');
// const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode:'development',
  entry: './src/app.js',
  output: {
    // path: path.resolve(__dirname, 'assets', 'scripts/js'),
    path: path.resolve(__dirname,'./assets/scripts/js/'),
    publicPath:'./assets/scripts/js/',
    filename: 'app.js',
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    overlay: true,
    // watchContentBase : true, 
    open: true,
    port:4444
  },
  // plugins:[
  //   new CleanPlugin.CleanWebpackPlugin()
  // ]
};
