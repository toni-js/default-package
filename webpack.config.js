const
  HtmlWebPackPlugin = require( 'html-webpack-plugin' )

module.exports = {
  entry: __dirname + '/src/index.tsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  modules: {
    rules: [{
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },{
      test: /\.html$/,
      use: [
        { loader: 'html-loader' }
      ]
    }/*,{
      test: /\.(styl|stylus)$/,
      loader: 'style-loader!css-loader!stylus-loader'
    },{
      test: /\.(woff(2)?|ttf|eot|png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/'
          }
        }]
    }*/]
  },
  plugins: [
    new HtmlWebPackPlugin( {
      filename: 'index.html',
    } )
  ]
}