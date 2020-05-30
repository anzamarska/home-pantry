import React from "react";
import ShoppingList from "../../components/ShoppingList/ShoppingListWrapper";

const ShoppingListView = (props) => (
  // <p>This is add shopping view</p>
  <ShoppingList shopItems={props.shopItems} boughtItem={props.boughtItem} />
);

export default ShoppingListView;
