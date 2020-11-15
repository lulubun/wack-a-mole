import React, { Component } from 'react';
import MoleGroup from './MoleGroup';
import './App.css';




class App extends Component {
  state = {
    score: 0,
    started: false,
    time: 30,
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  scorePoint = () => {
    if(this.state.started) this.setState({score: this.state.score + 1})
  }

  playGame = () => {
    const timer = () => this.state.started && this.setState({time: this.state.time - 1})
    setInterval(timer, 1000);
    this.setState({ started: true })

    setTimeout(() => {
      this.setState({ started: false })
      clearInterval(timer)
    }, 30000);
  }

  render() {  
    return (
      <div className="App">
        <h3>Score: {this.state.score} time: {this.state.time} sec </h3>
        <MoleGroup scorePoint={this.scorePoint} playing={this.state.started}/>
        <button
          disabled={this.state.started}
          onClick={this.playGame}
        >Play</button>
      </div>
    );
  }
}

export default App;