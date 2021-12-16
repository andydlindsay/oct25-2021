import React from 'react';

class ClassBased extends React.Component {
  constructor(props) {
    // this.username = 'Alice';
    // this.counter = 0;

    // super();
    super(props);

    this.state = {
      username: 'Alice',
      counter: 0,
      interviewer: props.interviewer || null,
      newKey: '',
      toppings: ['pepperoni'],
      interval: null
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  // handleClick = () => {
    // this mutates state
    // this.state.counter = this.state.counter + 1;

    this.setState({
      counter: this.state.counter + 1,
      newKey: 'value',
      toppings: [...this.state.toppings, 'pineapple']
    });
  }

  componentDidMount() {
    // called exactly once
    // called immediately after the initial render
    // fetching data, set up timers/intervals, establish web socket connections

    console.log('the component has mounted');

    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 1000);

    this.setState({ interval });
  }

  componentDidUpdate(prevProps, prevState) {
    // gets called anytime state or props change
    // listen for particular changes

    // if (prevProps.userId !== this.props.userId) {
    //   axios.get(`/api/users/${this.props.userId}`)
    // }

    console.log('the component has updated');
  }

  componentWillUnmount() {
    // fired once, right before the component is removed from the DOM
    // clean up
    // sever the websocket connection, clear timers/intervals

    console.log('the component will be removed from the DOM');

    clearInterval(this.state.interval);
  }

  render() {
    // const {someProp} = this.props;
    return (
      <div>
        <h2>This is a class-based component</h2>
        <h2>{this.props.someProp}</h2>
        {this.props.children}

        <h2>Username: {this.state.username}</h2>

        <h2>The current count is: {this.state.counter}</h2>
        <button onClick={() => this.handleClick()}>Increment</button>
      </div>
    );
  }
}

// const yourComponent = new ClassBased(props);
// yourComponent.props = props;

export default ClassBased;
