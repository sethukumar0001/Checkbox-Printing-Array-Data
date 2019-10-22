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
    this.setState({ data: [{ name: 'raju', age: 20 }, { name: 'ramu', age: 21 }, { name: 'ravan', age: 25 }, { name: 'laxman', age: 30 }] })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(item => {
            return <li>{item.name}-{item.age}</li>;
          })}
        </ul>
        Age Between 18 to 25:<input type="checkbox" defaultChecked={(this.state.checked)}
        />

      </div>
    );
  }
}

export default App;