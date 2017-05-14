const path = require('path');
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

module.exports = () => ({
  entry: {
    a: './src/components/a.jsx',
    b: './src/components/b.jsx',
    index: './src/index.jsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      // filename: "vendor.js"
      // (Give the chunk a different name)
      chunks: ['a', 'b'], //optioinal?
      minChunks: 2,
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      // filename: "vendor.js"
      // (Give the chunk a different name)
      chunks: ['common', 'index'],
      minChunks: Infinity,
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    })
  ],
  module: {
    rules: [{
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['es2015', {
                modules: false
              }],
              'react',
            ],
          }
        }]
      },
      {
        test: /\.(css|less)$/,
        loader: 'style!css!less',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
})