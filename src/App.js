import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      state:[]
    };
  }
  
  render(){
    return (
      <div className="App">
      
      </div>
    );
  }

  componentDidMount(){
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
    fetch(url)
      .then((result)=> result.json())
      .then((json)=>{
        let state = this.state;
        state.nutri = json;
        this.setState(state);
        console.log(json);
      })
  }
}
export default App;
