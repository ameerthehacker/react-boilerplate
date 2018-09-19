import * as React from "react";
import * as ReactDom from "react-dom";
// Components
import { Welcome } from "./components/Welcome/Welcome";
// CSS assets
import "./scss/app.scss";

export class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <Welcome name="Ameer Jhan" />;
  }
}

ReactDom.render(<App />, document.getElementById("react-root"));
