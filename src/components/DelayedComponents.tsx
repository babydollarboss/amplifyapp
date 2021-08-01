import React, { ReactNode } from "react";

interface IDelayedComponentsProps {
  delayUnmount?: number;
  isMounted: boolean;
  children: ReactNode;
  delayMount?: number;
}

interface IDelayedComponentsStates {
  shouldRender: boolean;
}

class DelayedComponents extends React.Component<
  IDelayedComponentsProps,
  IDelayedComponentsStates
> {
  constructor(props: IDelayedComponentsProps) {
    super(props);
    const { isMounted } = this.props
    this.state = {
      shouldRender: isMounted,
    };
  }

  componentDidUpdate = (prevProps: IDelayedComponentsProps) => {
    const { delayUnmount = 300, delayMount } = this.props;
    const { isMounted } = this.props
    if (prevProps.isMounted && !isMounted) {
      setTimeout(() => {
        if (!isMounted) {
          this.setState({ shouldRender: false });
        }
      }, delayUnmount);
    } else if (!prevProps.isMounted && isMounted) {
      if (delayMount) {
        setTimeout(() => {
          if (isMounted) {
            this.setState({ shouldRender: true });
          }
        }, delayMount);
      } else {
        setTimeout(() => {
          if (isMounted) {
            this.setState({ shouldRender: true });
          }
        }, 10);
      }
    }
  };

  render() {
    const { shouldRender } = this.state;
    const { isMounted, children } = this.props;

    // const children = React.cloneElement(this.props.children, { isMounted })
    const childrenElem = React.Children.map(children, (child) => {
      // @ts-ignore: False positive, using ReactNode is an acceptable type inside cloneElement
      return React.cloneElement(child, {
        isMounted,
      });
    });

    return shouldRender ? childrenElem : null;
  }
}

export { DelayedComponents };
