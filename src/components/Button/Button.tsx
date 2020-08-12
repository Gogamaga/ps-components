import React from 'react';

export interface Props {
  text: string;
}

export class Button extends React.Component<Props, any>{

  render() {
    return <div>{this.props.text}</div>;
  }
}
