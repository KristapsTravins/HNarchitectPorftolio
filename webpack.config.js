const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode:"development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(png|jpg|webp|gif|svg|mp4)$/,
        use: [{
                loader: 'file-loader',
            },
            {
                loader: 'webp-loader'
            }
        ]
    },
      {
        test: /\.(js|jsx)$/,  
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader','css-loader', 'sass-loader']
     },
   
    ],
    

  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: [
        'node_modules'
      ]      
  }
};