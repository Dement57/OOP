const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');


module.exports = {
  mode:'production',
  entry: './src/app.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath:'assets/scripts/'
  },
  devtool: 'nosources-source-map',
//   devServer: {
//     overlay: true,
//     open: true
//   }
  plugins:[
    new CleanPlugin.CleanWebpackPlugin()
  ]
};