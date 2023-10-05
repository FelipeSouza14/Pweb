ReactDOM.render(
  React.createElement(
    "h1",
    { id: "my-heading" },
    React.createElement(
      "span",
      null,
      "React ",
      React.createElement("em", null, "é muito")
    ),
    " massa!"
  ),

  document.getElementById("app")
);
