System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "typescript",
  "paths": {
    "github:*": "../jspm/github/*",
    "npm:*": "../jspm/npm/*"
  },
  "packages": {
    "js": {
      "main": "main.ts",
      "defaultExtension": "ts"
    }
  }
});

System.config({
  "map": {
    "handlebars": "github:components/handlebars.js@3.0.3",
    "jquery": "github:components/jquery@2.1.4",
    "reflect-metadata": "npm:reflect-metadata@0.1.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "typescript": "github:mhegazy/typescript@v1.5-beta2",
    "underscore": "npm:underscore@1.8.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:reflect-metadata@0.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

