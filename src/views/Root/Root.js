import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import Form from '../../components/Form/Form';

import AddStuffView from '../AddStuff/AddStuff';
import NotesView from '../Notes/Notes';
import ShoppingListView from '../ShoppingList/ShoppingList';
import Header from '../../components/Header/Header'


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
 
class Root extends React.Component {

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

onConfirmDelete = (name) => {
    let confirmation = window.confirm("Are you sure you want to remove this product from your list?");

    if (confirmation === true){ 
    this.setState({items: this.state.items.filter(
        (item) => {
            return item.name !== name;
        })}) 
    }
    }
        

  render() {
      console.log(this.state.items);
      return (

          <BrowserRouter>
          <>
            <Header/>
            <ListWrapper 
            items={this.state.items}
            onAddAmount={this.addAmount}
            onSubAmount={this.subAmount}
            onConfirmDelete={this.onConfirmDelete}
            /> 
            <Form submitFn={
              this.addItem
            }/>
            <Switch>
            <Route exact path="/addStuff" component={AddStuffView} />
            <Route exact path="/shoppingList" component={ShoppingListView} />
            <Route exact path="/notes" component={NotesView} />
            </Switch>
          </>
          
          </BrowserRouter >
      )
  }

}
export default Root;
