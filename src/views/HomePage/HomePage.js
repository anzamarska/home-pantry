import React from "react";
import ListWrapper from "../../components/ListWrapper/ListWrapper";

const HomePageView = (props) => (
  <ListWrapper
    items={props.items}
    onAddAmount={props.onAddAmount}
    onSubAmount={props.onSubAmount}
    onConfirmDelete={props.onConfirmDelete}
    onAddShopItem={props.onAddShopItem}
  />
);

export default HomePageView;
