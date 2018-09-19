import * as React from 'react';
import './scss/app.scss';

export class HelloWorld extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (<h1>Hello React</h1>);
  }
}