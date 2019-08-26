const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
  template: resolve(__dirname, 'public', 'index.html'),
  filename: './index.html'
});

const cssPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
  ignoreOrder: false
});

module.exports = (env, argv) => {
  const { mode } = argv;
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            mode === 'development'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              outputPath: 'img/',
              name: '[name].[ext]',
              publicPath: '/public/images'
            }
          }
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [htmlPlugin, cssPlugin],
    devServer: {
      historyApiFallback: true,
      port: 8000
    }
  };
};
