const createElement = React.createElement;

const th1 = createElement("th", null, "Nome");
const th2 = createElement("th", null, "Anime");
const th3 = createElement("th", null, "Poder/Derivação");

const tr1 = createElement(
  "tr",
  null,
  createElement("td", null, "Monkey D. Luffy"),
  createElement("td", null, "One Piece"),
  createElement("td", null, "Gomu Gomu No Mi")
);

const tr2 = createElement(
  "tr",
  null,
  createElement("td", null, "Naruto"),
  createElement("td", null, "Naruto"),
  createElement("td", null, "Kurama")
);

const tr3 = createElement(
  "tr",
  null,
  createElement("td", null, "Tanjiro"),
  createElement("td", null, "Demon Slayer"),
  createElement("td", null, "Sun Breath")
);

const thead = createElement(
  "thead",
  null,
  createElement("tr", null, th1, th2, th3)
);

const tbody = createElement("tbody", null, tr1, tr2, tr3);
const table = createElement("table", {id: "customers"}, thead, tbody);


ReactDOM.render(table, document.getElementById("app"));