import React, { PureComponent } from 'react';

interface State { error: undefined, info: undefined }
interface Props { children: null }

class BasicHeader extends PureComponent<Props, State> {
  render = () =>
    <header style={{ padding: 30, textAlign: 'center' }}>Sorry, something went wrong. Please try again later, while we fix this issue.</header>
}
export default BasicHeader;
