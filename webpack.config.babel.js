const path = require('path');
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = () => ({
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react',
              ],
            }
          }
        ]
      },
      {
        test: /\.(css|less)$/,
        loader: 'style!css!less',
      },
    ]
  },
})