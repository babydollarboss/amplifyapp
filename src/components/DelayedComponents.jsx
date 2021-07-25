import React from "react";

class DelayedComponents extends React.Component<
  IDelayedComponentsProps,
  IDelayedComponentsStates
> {
  state = {
    shouldRender: this.props.isMounted,
  };
  componentDidUpdate = (prevProps: IDelayedComponentsProps) => {
    const { delayUnmount = 300, delayMount } = this.props;
    if (prevProps.isMounted && !this.props.isMounted) {
      setTimeout(() => {
        if (!this.props.isMounted) {
          this.setState({ shouldRender: false });
        }
      }, delayUnmount);
    } else if (!prevProps.isMounted && this.props.isMounted) {
      if (delayMount) {
        setTimeout(() => {
          if (this.props.isMounted) {
            this.setState({ shouldRender: true });
          }
        }, delayMount);
      } else {
        this.setState({ shouldRender: true });
      }
    }
  };
  show = () => {};
  render() {
    const { shouldRender } = this.state;
    const { isMounted } = this.props;

    // const children = React.cloneElement(this.props.children, { isMounted })
    const children = React.Children.map(this.props.children, (child) => {
      // @ts-ignore: False positive, using ReactNode is an acceptable type inside cloneElement
      return React.cloneElement(child, {
        isMounted,
      });
    });

    return shouldRender ? children : null;
  }
}

export { DelayedComponents };
