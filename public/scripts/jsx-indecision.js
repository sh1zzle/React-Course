"use strict";

// Challenge
//create app object title/subtitle
// user title/subtitle in the template
// render template

// Challenge
// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

// Challenge
// Make button "-1" setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"

// Create a render function that renders the new jsx
// Call it right away
// Call it after options array added to
var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement("h1", null, app.title),
    app.subtitle && React.createElement("p", null, app.subtitle),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement("button", { onClick: removeAll }, "Remove All"),
    React.createElement(
      "ol",
      null,

      /* map over app.options getting back an array of list (set key and text)*/
      app.options.map(function (option) {
        return React.createElement("li", { key: option }, option);
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement("button", null, "Add Option")
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
