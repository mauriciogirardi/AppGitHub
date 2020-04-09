const common = require("../webpack/common");
module.exports = {
  module: {
    loaders: [common.cssLoader]
  }
};
