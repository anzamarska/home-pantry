import React from 'react';
import './index.css';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';

const initialStuff = [ {
      name: "eggs",
      amount: 10,
  },
  {
      name: "pear",
      amount: 4,
  },
  {
      name: "bread",
      amount: 7
  },
];
 
class App extends React.Component {

  state = {
      items: [...initialStuff],
  }

  addItem = (e) => {
      e.preventDefault();

      const newItem = {
          name: e.target[0].value,
          amount: e.target[1].value,
      }
      this.setState(prevState => ({
          items: [...prevState.items, newItem],
      }));

      e.target.reset();
  }

  render() {
      return (

          <div>
            <ListWrapper 
            items = {this.state.items}
            /> 
            <Form submitFn = {
              this.addItem
            }
          /> 
          </div >
      )
  }

}
export default App;
