import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import AddStuffView from '../AddStuff/AddStuff';
import NotesView from '../Notes/Notes';
import ShoppingListView from '../ShoppingList/ShoppingList';
import Header from '../../components/Header/Header'
import HomePageView from '../HomePage/HomePage';
import ShoppingList from '../../components/ShoppingList/ShoppingListWrapper';
import Modal from '../../components/Modal/Modal';
import sweets from '../../assets/images/categoryIcon/sweets.png'
import eggs from '../../assets/images/categoryIcon/eggs.png'
import meat from '../../assets/images/categoryIcon/meat.png'
import fruits from '../../assets/images/categoryIcon/fruits.png'
import vegetables from '../../assets/images/categoryIcon/vegetables.png'


const initialStuff = [ 
    {
    name: "chocolates",
    category: sweets,
    amount: 6,
    minNum: 6,
    },
    {
    name: "potatoes",
    category: {name: "vegetables", icon: vegetables},
    amount: 14,
    minNum: 6,
    },
    {
    name: "beef",
    category: {name: "meat", icon: meat},
    amount: 1,
    minNum: 2,
    },
    {
    name: "oranges",
    category: {name: "fruits", icon: fruits},
    amount: 6,
    minNum: 2,
    },
    {
    name: "eggs",
    category: {name: "eggs", icon: eggs},
    amount: 5,
    minNum: 10,
    },
    {
    name: "bananas",
    category: {name: "fruits", icon: fruits},
    amount: 7,
    minNum: 4,
    },
    {
    name: "tomatoes",
    category: {name: "vegetables", icon: vegetables},
    amount: 8,
    minNum: 8,
    },
    ];

// const categories = [
//         {
//           name: 'fruits',
//           icon: fruits
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
      isModalOpen: false,
  }

addItem = (e) => {
    e.preventDefault();
    console.log("target", e.target[3].value.name, "e.target", e.target);

    const newItem = {

        name: e.target[0].value,
        amount: Number(e.target[1].value),
        minNum: Number(e.target[2].value),
        category: (e.target[3].value) 

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

// addCategory = (name) => {
//     this.setState({items: this.state.items.map(item => item.name === name ? )})
// }

boughtItem = (name) => {
    this.setState({shopItems: this.state.shopItems.filter(
        (item) => {
            return item.name !== name;
        })}) 
    this.setState({items: this.state.items.map(item => item.name === name ? {...item, amount: item.amount 
        // + e.target.value
        
    } : item)});
}

openModal = () => {
  
    this.setState({
        isModalOpen: true,
    })
}

closeModal = () => {
    console.log("fdsf");
    this.setState({
        isModalOpen: false,
    })
}


  render() {
      const { isModalOpen } = this.state;

      return (

          <BrowserRouter>
          <>
            <Header openModalFn = {this.openModal}/>
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
            <Route exact path="/addStuff" component={() => <AddStuffView addItem={this.addItem} onAddShopItem={this.addShopItem} closeModalFn={this.closeModal} />} />
            <Route exact path="/shoppingList" component={ShoppingListView} />
            <Route exact path="/notes" component={NotesView} />
            </Switch>
      {isModalOpen && <Modal addItem={this.addItem} onAddShopItem={this.addShopItem} closeModalFn={this.closeModal} /> }
          </>
          
          </BrowserRouter >
      )
  }

}
export default Root;
