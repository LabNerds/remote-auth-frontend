import { render } from "solid-js/web";

import Test from "./Test";
import "./index.scss";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <Test />
  </div>
);
render(App, document.getElementById("app"));
