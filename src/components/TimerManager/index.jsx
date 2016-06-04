import React from 'react';
import Timer from '../Timer';

export default React.createClass({
    getInitialState: function () {
        this.nextTimerId = 2;

        return {
            timers: [ 0, 1 ]
        };
    },
    addTimer: function () {
        this.setState({
            timers: this.state.timers.concat([ this.nextTimerId ])
        });
        this.nextTimerId++;
    },
    removeTimer: function (index) {
        let timers = this.state.timers;
        let timersBeforeIndex = timers.slice(0, index);
        let timersAfterIndex = timers.slice(index + 1);

        this.setState({
            timers: timersBeforeIndex.concat(timersAfterIndex)
        });
    },
    render: function () {
        let timerElements = this.state.timers.map((timerId, index) => {
            return (
                <div key={timerId}>
                    <Timer />
                    <button onClick={this.removeTimer.bind(this, index)}>X</button>
                </div>
            );
        });

        return (
            <div>
                <div>
                    <h4>Timers</h4>
                    <button onClick={this.addTimer}>New Timer</button>
                </div>
                <div>
                    {timerElements}
                </div>
            </div>
        );
    }
});
