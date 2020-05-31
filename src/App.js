import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  state = {
    advice : ""
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async() => {
      try{
        const {data:{slip:{advice}}} = await axios.get("https://api.adviceslip.com/advice");
        this.setState({
          advice
        })
      }
      catch(error){
        console.log(error);
      }
    }

  render(){
    const {advice} = this.state;
    return(
        <div className="app">
          <div className="card">
            <h1 className="heading">{advice}</h1>
            <button onClick={this.fetchData} className="button">
              <span>ADVICE ME</span>
            </button>
          </div>
        </div>        
    )
  }
}

export default App;
