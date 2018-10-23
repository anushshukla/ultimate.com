import React, { PureComponent } from 'react';

interface State {}
interface Props {}

class BasicHeader extends PureComponent<Props, State> {
  render = () =>
    <footer>Footer</footer>
}
export default BasicHeader;
