const path = require("path"),
  CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    { plugin: require("@semantic-ui-react/craco-less") },
    {
      plugin: CracoLessPlugin,
    },
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: function(lessRule, _context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = /node_modules/;

          return lessRule;
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: "[local]_[hash:base64:5]"
          },
        }
      }
    }
  ],
  webpack: {
    alias: {
      "@resources": path.resolve(__dirname, "src/resources"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
