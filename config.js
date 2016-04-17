System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "handlebars": "github:components/handlebars.js@4.0.5",
    "jquery": "npm:jquery@2.2.3"
  }
});
