var webpack = require('webpack');
module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', __dirname + '/javascripts/entry.js'],
  },
  output: {
    path: __dirname + '/public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },
  devServer: {
    contentBase: __dirname + '/public',
    publicPath: 'http://localhost:8080/built/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      { test: /\.(jpe?g|png|gif|svg|ico)$/i, use: [
        { loader: 'file-loader',
          options: {
            query: {
              hash: 'sha512',
              digest: 'hex',
              name: 'images/[hash].[ext]'
            }
          }
        },
        { loader: 'image-webpack-loader',
          options: {
            query: {
              bypassOnDebug: 1,
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              gifsicle: {
                optimizationLevel: 7,
                interlaced: true,
              },
              optipng: {
                optimizationLevel: 7,
                interlaced: false
              },
              pngquant:{
                quality: "65-90",
                speed: 4
              },
              svgo:{
                plugins: [
                  {
                    removeViewBox: false
                  },
                  {
                    removeEmptyAttrs: false
                  }
                ]
              }
            }
          }
        }
      ] }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
