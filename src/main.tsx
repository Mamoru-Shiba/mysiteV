import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { SubComponent } from './sub-component';

const div = styled.h1`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
`

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <SubComponent name="My Counter for TypeScript" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
