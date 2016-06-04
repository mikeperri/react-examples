import React from 'react';
const UPDATE_INTERVAL = 100;

export default React.createClass({
    getInitialState: function () {
        this.startedAt = null;
        this.intervalId = null;

        return {
            time: 0,
            active: false,
            paused: false
        };
    },
    start: function () {
        let now = Date.now();

        this.startedAt = now - this.state.time;

        this.intervalId = setInterval(() => {
            let now = Date.now();
            let time = now - this.startedAt;

            this.setState({
                time
            });
        }, UPDATE_INTERVAL);

        this.setState({
            active: true,
            paused: false
        });
    },
    pause: function () {
        clearInterval(this.intervalId);
        this.setState({
            paused: true
        });
    },
    reset: function () {
        clearInterval(this.intervalId);
        this.setState(this.getInitialState());
    },
    componentWillUnmount: function () {
        clearInterval(this.intervalId);
    },
    render: function () {
        let seconds = Math.floor(this.state.time / 1000);
        let label = seconds === 1 ? 'second' : 'seconds';
        let labeledSeconds = seconds + ' ' + label;

        return (
            <div>
                <span>{labeledSeconds}</span>
                <button disabled={this.state.active && !this.state.paused} onClick={this.start}>Start</button>
                <button disabled={!this.state.active || this.state.paused} onClick={this.pause}>Pause</button>
                <button disabled={!this.state.active} onClick={this.reset}>Reset</button>
            </div>
        );
    }
});
