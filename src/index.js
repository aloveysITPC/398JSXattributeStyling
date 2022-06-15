import React from "react";
import ReactDOM from "react-dom";

//attributes below should actually be javaScript as reacdom.render renders down to javaScript
ReactDOM.render(
  <div>
    <h1 contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
