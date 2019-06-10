import React, {Component} from 'react';
import './App.css';

function UserCard(props) {

let info = (
  <div>
      <div>
        <span>{"phone number: "}{props.user.cell}</span>{<br></br>}
        <span>{"email: "}{props.user.email}</span>
      </div>
  </div>
);

let buttonText;

if(props.isHidden) {
  buttonText = 'Show Details';
} else {
  buttonText = 'Hide Details';
}

  return (
    <div style={{ marginBottom: "40px" }}>
      <img src={props.user.picture.large} alt='user'/>
      <div>
      <span>{props.user.name.first}</span>{" "}
      <span>{props.user.name.last}</span>

      {props.isHidden ? null : info}

      </div>

      <button onClick={props.onClick}>{buttonText}</button>

    </div>
  );
 
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isHidden: true
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=25')
    .then((res) => {
      return res.json();
    })
     .then((json) => {
       this.setState({
         results: json.results
       })
     }) 
  }

  onClick = (event) => {
    console.log(event.target);
    this.setState({
      isHidden: false
    })
  }

  render() {
    return (
      <div className="App">
      {this.state.results.map((user, index) => 
        <UserCard 
        key={index} 
        user={user} 
        onClick={this.onClick}
        isHidden={this.state.isHidden}
        />
      )}
      
      </div>
    );
  }
}


export default App;
