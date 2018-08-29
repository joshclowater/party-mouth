import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: props.seconds };
  }

  componentDidMount() {
    this.timer = setInterval(this.countDown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  countDown = () => {
    const seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds
    });

    if (seconds === 0) {
      clearInterval(this.timer);
      if (this.props.onTimerEnd) {
        this.props.onTimerEnd();
      }
    }
  };

  render() {
    return <span {...this.props}>{this.state.timer}</span>;
  }
}
