System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "typescript",
  "paths": {
    "github:*": "jspm/github/*",
    "npm:*": "jspm/npm/*"
  }
});

System.config({
    "packages": {
        "js": {
        "main":"main.ts",
        "defaultExtension": "ts"
        }
    },
    "map": {
        "handlebars": "github:components/handlebars.js@3.0.3",
        "jquery": "github:components/jquery@2.1.4",
        "text": "github:systemjs/plugin-text@0.0.2",
        "typescript": "github:mhegazy/typescript@v1.5-beta2",
        "underscore": "npm:underscore@1.8.3"
    }
});

