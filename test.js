const assert = require("assert");
const Hogan = require("hogan.js");
const Greenman = require("./");

describe("Greenman", () => {
	const template = "<h1>Hello, {{name}}!</h1>";
	const handler = (rendered) => console.log(rendered);
	const locals = { name: "Monty" };

	const views = [
		() => new Greenman(template, handler, locals),
		() => new Greenman(template, { handler, locals })
	].map(v => v());

	describe("#constructor()", () => {
		it("this.template instanceof Hogan.template", () => {
			views.map(v => v.template)
				.forEach(a => assert(a instanceof Hogan.Template));
		});

		it("this.handler == handler", () => {
			views.map(v => v.handler)
				.forEach(a => assert.equal(a, handler));
		});

		it("this.locals == locals", () => {
			views.map(v => v.locals)
				.forEach(a => assert.equal(a, locals));
		});
	});

	describe("#render()", () => {
		it("should call handler with rendered template", () => {
			views.forEach(view => {
				view.handler = rendered => assert.equal(rendered, "<h1>Hello, Monty!</h1>");
				view.render();
			});
		});
	});
});
