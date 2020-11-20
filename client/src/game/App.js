import React, { Component } from 'react';
import MoleGroup from './MoleGroup';
import Timer from './Timer';
import './App.css';




class App extends Component {
  state = {
    score: 0,
    started: false,
    time: 30,
    highScore: null,
  };

  // componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  scorePoint = () => {
    if(this.state.started) this.setState({score: this.state.score + 1})
  }

  setHighScore = () => {
    const { score, highScore } = this.state;
    if (!highScore || (score > highScore)) {
        this.setState({ highScore: score, score: 0 })
    }
  }

  playGame = () => {
    const { score, highScore, started, time } = this.state;
    this.setState({ started: true });
    setTimeout(() => {      
      this.setHighScore()
      this.setState({ started: false })
    }, 30000);
  }

  render() {  
    const { score, highScore, time, started } = this.state;
    return (
      <div className="App">
        {started && (
          <div>
            <h2>Score: {score}</h2>
            <Timer />
          </div>
        )}
        <MoleGroup scorePoint={this.scorePoint} playing={started}/>
        <button
          disabled={started}
          onClick={this.playGame}
        >Play</button>
        {highScore && <h2>High Score: {highScore}</h2>}
      </div>
    );
  }
}

export default App;