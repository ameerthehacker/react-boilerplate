import * as PropTypes from "prop-types";
import * as React from "react";

interface IWelcomeProps {
  name: string;
}

export class Welcome extends React.Component<IWelcomeProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <h1>Welcome, {this.props.name}</h1>;
  }
}
