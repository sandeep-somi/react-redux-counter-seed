import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import actions from '../redux/actions';


@connect((state) => state)
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			color: 0
		}
	}

	onClickIncrement = () => {
		let { counter } = this.props.counter;
		counter == null ? counter = 1 : counter += 1
		actions.incrementCounter(counter)
		let { color } = this.state;
		color = Math.floor((Math.random() * 999999) + 111111);
		this.setState({ color });
	}

	onClickDecrement =() => {
		let { counter } = this.props.counter;
		counter == null ? counter = -1 : counter -= 1
		actions.decrementCounter(counter)
		let { color } = this.state;
		color = Math.floor((Math.random() * 999999) + 111111);
		this.setState({ color });
	}

	render() {
		const { counter = 0 } = this.props.counter;
		
	    return (
	    	<Col xs={6} sm={12} md={12} className="inner-col">
					<Button bsSize="lg" bsStyle="info" onClick={this.onClickIncrement}>Increment</Button>{' '}
					<Button bsSize="lg" bsStyle="info" onClick={this.onClickDecrement}>Decrement</Button>
					<h1 style={{ color: `#${this.state.color}` }}>{counter}</h1>
				</Col>
	    );
	}
}
export default App;
