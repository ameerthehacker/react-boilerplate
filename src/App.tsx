import * as React from "react";
import * as ReactDom from "react-dom";
// CSS assets
import "./scss/app.scss";

export class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <h1>Hello React</h1>;
  }
}

ReactDom.render(<App />, document.getElementById("react-root"));
