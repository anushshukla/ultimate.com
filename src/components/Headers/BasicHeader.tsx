import React, { PureComponent } from 'react';

interface State {}
interface Props {}

class BasicHeader extends PureComponent<Props, State> {
  render = () =>
    <header>Header</header>
}
export default BasicHeader;
