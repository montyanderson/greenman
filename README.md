# greenman

View manager for [Mustache](https://mustache.github.io/) templates using [hogan.js](https://twitter.github.io/hogan.js/).

```
npm install @montyanderson/greenman
```

``` javascript
const $ = require("jquery");
const Greenman = require("@montyanderson/greenman");

const dashboard = new Greenman(`
	{{#user}}
		<h1>Hi, {{user}}!</h1>
	{{/user}}

	{{^user}}
		Welcome aboard!
	{{/user}}
`, (rendered) => {
	$(".dashboard").html(rendered);
});

dashboard.render({ user: "Monty! "});

```
