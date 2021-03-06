import React from "react";
import "./index.css";
import "../../styles/global.scss";
import AppContext from "../../../src/context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListWrapper from "../../components/ListWrapper/ListWrapper";
import AddStuffView from "../AddStuff/AddStuff";
import ShoppingListView from "../ShoppingList/ShoppingList";
import Header from "../../components/Header/Header";
import HomePageView from "../HomePage/HomePage";
import ShoppingList from "../../components/ShoppingList/ShoppingListWrapper";
import Modal from "../../components/Modal/Modal";
import sweets from "../../assets/images/categoryIcon/sweets.png";
import eggs from "../../assets/images/categoryIcon/eggs.png";
import meat from "../../assets/images/categoryIcon/meat.png";
import fruits from "../../assets/images/categoryIcon/fruits.png";
import vegetables from "../../assets/images/categoryIcon/vegetables.png";

let initialStuff = [
  {
    name: "chocolates",
    category: sweets,
    amount: 6,
    minNum: 6,
  },
  {
    name: "potatoes",
    category: vegetables,
    amount: 14,
    minNum: 6,
  },
  {
    name: "beef",
    category: meat,
    amount: 3,
    minNum: 2,
  },
  {
    name: "oranges",
    category: fruits,
    amount: 6,
    minNum: 2,
  },
  {
    name: "eggs",
    category: eggs,
    amount: 11,
    minNum: 10,
  },
  {
    name: "bananas",
    category: fruits,
    amount: 7,
    minNum: 4,
  },
  {
    name: "tomatoes",
    category: vegetables,
    amount: 8,
    minNum: 8,
  },
];

const initialShopItems = [];

class Root extends React.Component {
  state = {
    items: [...initialStuff],
    shopItems: [...initialShopItems],
    isModalOpen: true,
  };

  addItem = (e, newItem) => {
    e.preventDefault();
    console.log("its works!!");

    const newUserItem = {
      name: e.target[0].value,
      amount: Number(e.target[1].value),
      minNum: Number(e.target[2].value),
      category: e.target.value,
    };
    this.setState((prevState) => ({
      items: [...prevState.items, newUserItem],
    }));

    // e.target.reset();
  };

  addShopItem = () => {
    this.setState((state, props) => {
      const filteredList = state.items.filter(
        (item) => item.amount - item.minNum < 0
      );
      const newShopItems = filteredList.map((item) => ({
        name: item.name,
        desireAmount: item.minNum - item.amount,
      }));
      return { shopItems: newShopItems };
    });
  };

  subAmount = (name) => {
    this.setState({
      items: this.state.items.map((item) =>
        item.name === name ? { ...item, amount: item.amount - 1 } : item
      ),
    });
  };

  addAmount = (name) => {
    console.log(name);
    this.setState({
      items: this.state.items.map((item) =>
        item.name === name ? { ...item, amount: item.amount + 1 } : item
      ),
    });
  };

  onConfirmDelete = (name) => {
    let confirmation = window.confirm(
      "Are you sure you want to remove this product from your list?"
    );

    if (confirmation === true) {
      this.setState({
        items: this.state.items.filter((item) => {
          return item.name !== name;
        }),
      });
    }
  };

  // addCategory = (name) => {
  //     this.setState({items: this.state.items.map(item => item.name === name ? )})
  // }

  boughtItem = (name) => {
    this.setState({
      shopItems: this.state.shopItems.filter((item) => {
        return item.name !== name;
      }),
    });
    this.setState({
      items: this.state.items.map((item) =>
        item.name === name
          ? {
              ...item,
              amount: item.amount,
              // + e.target.value
            }
          : item
      ),
    });
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    console.log("close modal");
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} closeModalFn={this.closeModal} />
          {/* <ListWrapper
            items={this.state.items}
            onAddAmount={this.addAmount}
            onSubAmount={this.subAmount}
            onConfirmDelete={this.onConfirmDelete}
            onAddShopItem={this.addShopItem}
          /> */}
          {/* <ShoppingListView
            shopItems={this.state.shopItems}
            boughtItem={this.boughtItem}
          /> */}
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <HomePageView
                  items={this.state.items}
                  onAddAmount={this.addAmount}
                  onSubAmount={this.subAmount}
                  onConfirmDelete={this.onConfirmDelete}
                  onAddShopItem={this.addShopItem}
                />
              )}
            />
            <Route
              exact
              path="/addStuff"
              component={() => (
                <AddStuffView
                  addItem={this.addItem}
                  onAddShopItem={this.addShopItem}
                  closeModalFn={this.closeModal}
                />
              )}
            />
            <Route
              exact
              path="/shoppingList"
              component={() => (
                <ShoppingListView
                  shopItems={this.state.shopItems}
                  boughtItem={this.boughtItem}
                />
              )}
            />
          </Switch>
          {isModalOpen && (
            <Modal
              addItem={this.addItem}
              onAddShopItem={this.addShopItem}
              closeModalFn={this.closeModal}
            />
          )}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}
export default Root;
