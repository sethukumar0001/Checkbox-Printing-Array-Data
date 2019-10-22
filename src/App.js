// import React, { Component } from 'react';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     }
//   }

//   handleCheck(event) {
//     const value = event.target.value;
//     console.log(value)
//   }

//   componentDidMount() {
//     this.setState({ data: [{ name: 'raju', age: 20 }, { name: 'ramu', age: 21 }, { name: 'ravan', age: 25 }, { name: 'laxman', age: 30 }] })
//   }
//   render() {
//     return (
//       <div>
//       <ul>
//         {
//           this.state.data.map((person,index) => {
//             let checked = null;
//             if(person.age >= 18 && person.age <= 25){
//               checked = true;
//             }

//           console.log("checked"+checked);
//           return(
//             <ul>
//           <li>{person.name}-{person.age}</li>
//             <input type="checkbox" checked = {checked} key = {index} />
//             </ul>
//           )

//         })
//         }
//       </ul>
//     </div>
 
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'raju', age: 20 }, 
        { name: 'ramu', age: 21 }, 
        { name: 'ravan', age: 25 }, 
        { name: 'laxman', age: 30 }
      ],
      isAbove : false
    }
  }

  componentDidMount() {
    this.state.data.forEach( val => {
      if(val.age >= 18 && val.age <=25){
        this.setState({
          isAbove : true
        })
      }
    })
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.data.map((person) => {
              return (
                <ul>
                  <li>{person.name} - {person.age}</li>
                </ul>
              )
            })
          }
          <label>Yes</label><input type="checkbox" checked={this.state.isAbove} />
        </ul>
      </div>

    );
  }
}

export default App;