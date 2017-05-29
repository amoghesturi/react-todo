var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
  })
  .listen(8888, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err); // eslint-disable-line
    }

    console.log('Running at http://0.0.0.0:8888');
  });
