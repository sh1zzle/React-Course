console.log("utils.js is running!");

const square = (x) => x * x;
const add = (a, b) => a + b;

const subtract = (n, m) => n - m;

export { square, add, subtract as default };
