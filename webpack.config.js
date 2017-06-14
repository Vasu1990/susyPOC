var path = require("path");

var config = {


   entry: {
      app: ["./src/index.js"]
  },
	
   output: {
      path: __dirname,
      filename: './dist/bundle.js'
   },
 
	
   devServer: {
      inline: true,
      port: 8080
   }, 
	
   module: {
      loaders: [
         {
            test: /\.(jsx|js)?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',				
            query: {
               presets: ['es2015','stage-0' , 'react']
            }
         }
      ]
    }
}

module.exports = config;