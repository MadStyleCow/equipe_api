import React, { Component } from 'react';
import ShowJumpingEvent from './ShowJumpingEvent'
import _ from 'lodash';


class Timekeeping extends Component {

	// Class constructor
	constructor(props) {
		super(props);

		this.onOpen = this.onOpen.bind(this);
		this.onClose = this.onClose.bind(this);
		this.updateTime = this.updateTime.bind(this);
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.fixedTo = this.fixedTo.bind(this);
		this.output = this.output.bind(this);
		this.onMessage = this.onMessage.bind(this);

		this.state = {
			connected: false,
			time: null,
			previousTime: null,
			running: false,
			countDown: false,
			countDownDiff: null,
			countDownValue: null,
			waiting: false,
			faults: null,
			totalFaults: null,
			fenceFaults: null,
			timeFaults: null,
			timeAdded: null,
			id: null,
			startNo: null,
			rider: null,
			horse: null,
			round: 1,
			phase: 1,
			timeToBeatDiff: null,
			timeToBeatTime: null,
			timekeepingOutputId: null
		};
	}

	// On mount event
	componentDidMount(){
		this.webSocket = new WebSocket(this.props.url);
		this.webSocket.onopen = this.onOpen;
		this.webSocket.onclose = this.onClose;
		this.webSocket.onmessage = this.onMessage;
	}

	// On dismount event
	componentWillUnmount(){
		this.webSocket.close();
		this.webSocket = null;
	}

	// On WS opened event
	onOpen(){
		this.setState({ connected: true });
	}

	// On WS closed event
	onClose(){
		this.setState({ connected: false });
	}

	// On JSON message received event
	onMessage(event){
		let data = JSON.parse(event.data);

		if(data.type === 'output')
			this.output(data.payload);
	}

	// Output function
	output(data){
		// If eliminated hide the clock
		data.isEliminated = !!ShowJumpingEvent[data.fenceFaults];

		// Normalize
		data.faults = data.faults || 0;
		if(!data.timeAdded)
			data.timeAdded = null;

		if(data.countDownValue){
			data.countDownValue = parseFloat(data.countDownValue, 10);
		}

		if (data.startNo) {
			data.startNo += '.';
		}

		if (data.rank) {
			data.rank += '.';
		}

		if (data.countDown && !data.running) {
			this.start(Date.now() - (data.countDownValue * 1000));
		}
		else {
			if(data.running)
				this.start(Date.now() - (parseFloat(data.time, 10) * 1000));
			else {
				if(this.state.countDown && !data.countDown)
					data.countDown = true;

				data.time = this.fixedTo(parseFloat(data.time, 10) || 0, 2);
				data.countDownValue = this.fixedTo(parseFloat(data.countDownValue, 10), 2);
				this.stop();
			}
		}

		this.setState(data);
	}

	// Helper fixedTo
	fixedTo(number, digits) {
		if(_.isFinite(number)){
			var k = Math.pow(10, digits);
			var value = Math.round(number * k) / k;
			return value.toFixed(digits);
		} else {
			return null;
		}
	}

	// Helper update time
	updateTime(){
		var t = (Date.now() - this.startTick) / 1000;
		if(this.state.countDown)
			this.setState({ countDownValue: this.fixedTo(t, 1) });
		else
			if(this.state.running)
				this.setState({ time: this.fixedTo(t, 1) });
	}

	// Helper start
	start(tick) {
		this.startTick = tick;
		if(!this.timer)
			this.timer = setInterval(this.updateTime, 100);
	}

	// Helper stop
	stop() {
		clearInterval(this.timer);
		this.timer = null;
	}

	// Render function
	render() {
		return (
			<div>
				<div className="App-dataContainer">
					<span className="App-dataLine">
						<span className={`App-id ${(!this.state.countDown && !this.state.running && this.state.rank !== '999.') ? 'red' : ''}`}>{ (!this.state.countDown && !this.state.running && this.state.rank !== '999.') ? this.state.rank : this.state.startNo }</span>
						<span>{ this.state.rider }</span>
					</span>
					<span className="App-dataLine">
						<span>{ this.state.horse }</span>
					</span>
				</div>
				<div className="App-timeContainer">
					<span>{ this.state.faults }</span>
					<span>{ this.state.countDown ? this.state.countDownValue : this.state.time }</span>
				</div>
			</div>
		);
	}
}

Timekeeping.propTypes = { url: React.PropTypes.string.isRequired };
Timekeeping.defaultProps = { url: 'ws://localhost:21000' };

export default Timekeeping;
