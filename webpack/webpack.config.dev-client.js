var path = require('path');
var webpack = require('webpack');
var assetsPath = path.join(__dirname, '..', 'public', 'assets');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

var commonLoaders = [
  { test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    query: {
      "presets": ["react-hmre", "es2015", "react", "stage-0"],
      "plugins": ["transform-object-assign"]
    },
    include: path.join(__dirname, '..', 'app'),
    exclude: path.join(__dirname, '..', 'node_modules')
  },
  { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
    loader: 'url',
    query: {
        name: '[hash].[ext]',
        limit: 10000,
    }
  },
  { test: /\.html$/, loader: 'html-loader' }
];

var postCSSConfig = function() {
  return [
    require('postcss-simple-vars')(),
    require('postcss-nested')(),
    require('autoprefixer')({
      browsers: ['last 2 versions', 'IE > 8']
    }),
    require('postcss-reporter')({
      clearMessages: true
    })
  ];
};

module.exports = {
    devtool: 'eval',
    name: 'browser',
    context: path.join(__dirname, '..', 'app'),
    entry: {
      app: ['./config/client', hotMiddlewareScript]
    },
    output: {
      path: assetsPath,
      filename: '[name].js',
      publicPath: '/assets/'
    },
    module: {
      loaders: commonLoaders.concat([
        { test: /\.scss$/,
          loader: 'style!css!sass'
        },
        { test: /\.css$/,
          loader: 'style!css',
          include: path.join(__dirname, '..', 'app', 'css', 'util')
        },
        { test: /\.css$/,
          loader: 'style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
          exclude: [path.join(__dirname, '..', 'app', 'css', 'util')]
        }
      ])
    },
    resolve: {
      root: [path.join(__dirname, '..', 'app')],
      extensions: ['', '.js', '.jsx', '.css'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          __DEVCLIENT__: true,
          __DEVSERVER__: false,
          "process.env": {
            BROWSER: JSON.stringify(true)
          }
        })
    ],
    postcss: postCSSConfig
};
