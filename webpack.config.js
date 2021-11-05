const path = require("path")  // commonJS

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "public", "assets", "js"),
      filename: "bundle.js",
    },
    module: {
      rules: [{ 
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
              presets: ["@babel/preset-env"],
            }
         },
      },{
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }],
    },
    devtool: "source-map",
}