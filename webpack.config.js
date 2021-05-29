const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/assets/scripts/local/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    port: 3000
  },
  devtool: 'inline-source-map',
  plugins: [ 
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/assets/templates/pages/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'order.html',
      template: './src/assets/templates/pages/order.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'otmet-den-rozhdeniya-v-kino.html',
      template: './src/assets/templates/pages/otmet-den-rozhdeniya-v-kino.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'bezlimit-v-megalende.html',
      template: './src/assets/templates/pages/bezlimit-v-megalende.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'vipusknoi-v-megalende.html',
      template: './src/assets/templates/pages/vipusknoi-v-megalende.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'megalend-polnostyu-otkrit.html',
      template: './src/assets/templates/pages/megalend-polnostyu-otkrit.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'pitstsa-v-podarok.html',
      template: './src/assets/templates/pages/pitstsa-v-podarok.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'igrovie-avtomati-otkriti.html',
      template: './src/assets/templates/pages/igrovie-avtomati-otkriti.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'bonusnaya-sistema.html',
      template: './src/assets/templates/pages/bonusnaya-sistema.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.css$/i,
      //   exclude: /\.order.css$/i,
      //   loader: 'css-loader',
      // },
      // {
      //   test: /\.order.css$/i,
      //   type: 'asset/resource',
      // },
    ],
  },
};