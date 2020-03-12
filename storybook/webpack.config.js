module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loaders: ["style", "css?modules"]
      }
    ]
  }
};
