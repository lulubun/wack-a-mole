 import React, { Component } from 'react';

class Timer extends Component {
    state = {
        time: 30,
    };

    timer = () => this.setState({time: this.state.time - 1})


    componentDidMount = () => {
        setInterval(this.timer, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.timer)
    }

  render() {  
    const { time } = this.state;
       return (
            <div style={{display: 'flex', flexDirection: 'column', maxWidth: 200, width: '50vw', 'align-items': 'center'}}>
                <h3>Time Remaining: {time} sec </h3>
            </div>
        )
    };
}

export default Timer