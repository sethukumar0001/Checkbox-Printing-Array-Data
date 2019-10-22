import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  handleCheck(event) {
    const value = event.target.value;
    console.log(value)
  }

  componentDidMount() {
    this.setState({ data: [{ name: 'raju', age: 19 }, { name: 'ramu', age: 26 }, { name: 'ravan', age: 25 }, { name: 'laxman', age: 30 }] })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(item => {
            return <li>{item.name}-{item.age}</li>;
          })}
        </ul>
        Age Between 18 to 25:
        Yes:<input type="checkbox" defaultChecked={((this.state.data.filter((data) => { return console.log(data.age >= 18 && data.age <= 25) })) === true) ? true : false} />
        No:<input type="checkbox" defaultChecked={((this.state.data.filter((data) => { return console.log(data.age <= 18 && data.age >= 25) })) === true) ? true : false} />
          {/* i used console.log for what data function returned its not related to condition*/}
      </div>
    );
  }
}

export default App;