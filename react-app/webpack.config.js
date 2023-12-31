const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development', 
  entry: './src/index.jsx', 
 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
 
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: '/src/assets', to: 'assets/', noErrorOnMissing: true },
      ],
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  
  devServer: {
    client: {
      overlay: true, 
      progress: true, 
    },
    compress: true,
    hot: true, 
    open: true, 
    port: 3000, 
  },
 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
}