import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import AddStuffView from '../AddStuff/AddStuff';
import NotesView from '../Notes/Notes';
import ShoppingListView from '../ShoppingList/ShoppingList';
import Header from '../../components/Header/Header'
import Form from '../../components/Form/Form';
import HomePageView from '../HomePage/HomePage';
import ShoppingList from '../../components/ShoppingList/ShoppingListWrapper';


const initialStuff = [ 
{
      name: "pasta",
      category: "grain",
      amount: 6,
      minNum: 6,
  },
  {
      name: "tomatoes",
      category: "vegetables",
      amount: 14,
      minNum: 6,
  },
  {
      name: "rice",
      category: "grain",
      amount: 1,
      minNum: 4,
  },
  {
    name: "cottage chees",
    category: "milk",
    amount: 6,
    minNum: 2,
    },
    {
        name: "eggs",
        category: "milk",
        amount: 5,
        minNum: 10,
    },
    {
        name: "bananas",
        category: "fruits",
        amount: 7,
        minNum: 4,
    },
    ];

// const categories = [
//         {
//           name: 'fruits',
//           src: apple
//         },
//         {
//           name: 'sweet',
//           src: pie
//         },
//         {
//           name: 'milk',
//           src: jug
//         }
//       ];
  

const initialShopItems = []
 
class Root extends React.Component {

  state = {
      items: [...initialStuff],
      shopItems: [...initialShopItems],
  }

addItem = (e) => {
    e.preventDefault();

    const newItem = {
        name: e.target[0].value,
        amount: Number(e.target[1].value),
        minNum: Number(e.target[2].value),
    }
    this.setState(prevState => ({
        items: [...prevState.items, newItem],
    }));

    e.target.reset();
}

addShopItem = () => {
    this.setState(
      (state, props) => {
        const filteredList = state.items.filter(item => item.amount - item.minNum < 0);
        const newShopItems = filteredList.map(item => ({name: item.name, desireAmount: item.minNum - item.amount}))
        return {shopItems: newShopItems}
      })
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

addCategory = (name) => {

}

boughtItem = (name) => {
    this.setState({shopItems: this.state.shopItems.filter(
        (item) => {
            return item.name !== name;
        })}) 
    this.setState({items: this.state.items.map(item => item.name === name ? {...item, amount: item.minNum} : item)});
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
            onAddShopItem={this.addShopItem}
            /> 
            <ShoppingList 
            shopItems={this.state.shopItems}
            boughtItem={this.boughtItem}
            />
        <Switch>
            <Route exact path="/" component={HomePageView} />
            <Route exact path="/addStuff" component={() => <AddStuffView addItem={this.addItem} onAddShopItem={this.addShopItem}/>} />
            <Route exact path="/shoppingList" component={ShoppingListView} />
            <Route exact path="/notes" component={NotesView} />
            </Switch>
          </>
          
          </BrowserRouter >
      )
  }

}
export default Root;
