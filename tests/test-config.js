System.config({
	"baseURL": "/base",
	"defaultJSExtensions": true,
	"transpiler": "typescript",
	"paths": {
		"github:*": "httpdocs/jspm/github/*",
		"npm:*": "httpdocs/jspm/npm/*"
	}
});

System.config({
    "packages": {
        "src/ts": {
            "defaultExtension": "ts"
        },
        "tests": {
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