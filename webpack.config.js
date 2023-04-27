var path = require("path");

module.exports = {
  mode: "development", // production, development // 설정 모드
  context: path.resolve(__dirname, "./src"),
  entry: {
    home: "./index.js",
    //page1: './main/jsx/Page1Page.jsx'
  },
  devtool: "source-map",
  cache: true,
  output: {
    path: __dirname,
    filename: "app.bundle.js",
    publicPath: "/",
  },
  // devServer: {
  //   proxy: {
  //     '/api': 'http://localhost:3000',
  //     hot: true
  //   }
  // },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["svg-loader"],
      },
    ],
  },
};
