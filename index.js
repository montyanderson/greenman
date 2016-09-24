const Hogan = require("hogan.js");

class Greenman {
	constructor(template, options, locals) {
		this.template = Hogan.compile(template);

		this.locals = locals;

		if(typeof options == "function") {
			this.handler = options;
		} else if(typeof options == "object") {
			this.handler = options.handler || (() => {});
			this.locals = options.locals || {};
		}
	}

	render(locals) {
		locals = Object.assign({}, this.locals, locals);
		this.handler(this.template.render(locals), locals);
	}
}

module.exports = Greenman;
