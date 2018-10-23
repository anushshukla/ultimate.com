import React, { PureComponent } from 'react';

interface State { error: undefined, info: undefined }
interface Props { children?: React.ReactNode }

class ErrorBoundary extends PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    children: null,
  };
  state: Readonly<State> = {
    error: undefined,
    info: undefined,
  }
  componentDidCatch = (error: any, info: any) => this.setState({ error, info });
  render = () => this.state.error && process.env.ENV !== 'development' ?
    <div style={{ padding: 30, textAlign: 'center' }}>Sorry, something went wrong. Please try again later, while we fix this issue.</div>
    : this.props.children
}
export default ErrorBoundary;
