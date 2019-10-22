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
    this.setState({ data: [{ name: 'raju', age: 19}, { name: 'ramu', age: 26 }, { name: 'ravan', age: 25 }, { name: 'laxman', age: 30 }] })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(item => {
            return <li>{item.name}-{item.age}</li>;
          })}
        </ul>
        {/* Yes:<input type="checkbox" defaultChecked={((this.state.data.filter((data)=>{  return console.log(data.age < 18) })) === false )?this.state.checked:!this.state.checked} />
        No:<input type="checkbox" defaultChecked={((this.state.data.filter((data)=>{  return console.log(data.age > 18) === false  })))?!this.state.checked:this.state.checked} /> */}
        
        Yes:<input type = "checkbox" defaultChecked = {(this.state.data.filter(data=>{ return data.age > 18}))} />
        No:<input type = "checkbox" defaultChecked = {this.state.checked} />

            </div>
    );
  }
}

export default App;