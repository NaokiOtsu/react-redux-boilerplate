import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

const config = {
  entry: src + '/app.jsx',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules!postcss-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        loader: 'file-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: './.eslintrc.json'
        }
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
  config.devtool = 'inline-source-map';
}

module.exports = config;
