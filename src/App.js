import React from 'react';
import './index.css';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';

const initialStuff = [ {
      name: "pasta",
      amount: 6,
      minNum: 6,
  },
  {
      name: "tomatoes",
      amount: 4,
      minNum: 6,
  },
  {
      name: "rice",
      amount: 7,
      minNum: 4,
  },
  {
    name: "cottage chees",
    amount: 6,
    minNum: 2,
},
    {
        name: "eggs",
        amount: 4,
        minNum: 10,
    },
    {
        name: "bananas",
        amount: 7,
        minNum: 4,
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
          amount: Number(e.target[1].value),
      }
      this.setState(prevState => ({
          items: [...prevState.items, newItem],
      }));

      e.target.reset();
  }


subAmount = (name) => {
    this.setState({items: this.state.items.map(item => item.name === name ? {...item, amount: item.amount - 1} : item)});
}

addAmount = (name) => {
    console.log(name);
    this.setState({items: this.state.items.map(item => item.name === name ? {...item, amount: item.amount + 1} : item)});
}

// confirmDelete = (key) => {
//     let agreement = window.confirm('Do you want to delete this item?')
//        ? null
//        removeItem 
//        : null};

// const removeItem = (key) => {
// const newState = this.state.products.filter(
//     (item) => {
//         return item[0] !== key;
//     }
// )};

// this.setState({
//     products: newState,
// });
        

  render() {
      console.log(this.state.items);
      return (

          <div>
            <ListWrapper 
            items={this.state.items}
            onAddAmount={this.addAmount}
            onSubAmount={this.subAmount}
            /> 
            <Form submitFn={
              this.addItem
            }
          /> 
          </div >
      )
  }

}
export default App;
