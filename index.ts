import { createElement } from "react";
import { render } from "react-dom";
import "normalize.css";
import "minireset.css";

import App from "./src/App";

render(createElement(App), document.getElementById("root"));
