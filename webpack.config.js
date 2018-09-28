// Configuracion web pack
const nodeExternals = require('webpack-node-externals') ;

module.exports = {
  entry: './src/app/index.js',
  //target: 'node', // in order too ignore built-in modules like path, fs, etc.
  //externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  output: {
    path: __dirname + '/src/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
