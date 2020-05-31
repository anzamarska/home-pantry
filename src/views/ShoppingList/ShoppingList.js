import React from "react";
import ShoppingList from "../../components/ShoppingList/ShoppingListWrapper";

const ShoppingListView = (props) => (
  <ShoppingList shopItems={props.shopItems} boughtItem={props.boughtItem} />
);

export default ShoppingListView;
