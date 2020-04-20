import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from '../Button/Button';
import Title from '../Title/Title';
import sweets from '../../assets/images/categoryIcon/sweets.png';
import meat from '../../assets/images/categoryIcon/meat.png';
import fruits from '../../assets/images/categoryIcon/fruits.png';
import vegetables from '../../assets/images/categoryIcon/vegetables.png';
// import { types } from "node-sass";
import AppContext from '../../context';


console.log("fruits", fruits);
const fruits1 = {name:"fruits", icon: fruits}

const types = {
  fruits: "fruits",
  sweets: "sweets",
  meat: "meat",
  vegetables: "vegetables",
}

class Form extends React.Component {
  state = {
    activeOption: types.twitter,
  }

  handleRadioButtonChange=(type)=>{
    this.setState({
      activeOption: type,
    })
  }

  render(
    // { onAddItem, closeModalFn, onAddShopItem, onSubmit } 
    ) {
    return (
      <AppContext.Consumer>

        
      </AppContext.Consumer>
        <div className={styles.wrapper}>
          <button className={styles.button} onClick={this.props.closeModalFn}>X</button>
          <Title>new stuff in home</Title>
          <form 
          autoComplete="off"  
          onAddItem={this.props.onAddItem} 
          // onSubmit={this.props.submitFn}
          >
            <Input
              name="name"
              maxLength={30}
              label="name of new stuff"
            />
            <Input
              name="amount"
              label="how many you wanna add?"
              type="number"
            />
            <Input
              name="minNum"
              label="how much of this product you would like to have in home?"
              type="number"
            />
      
                <div className="radio" >
                  <label>
                    <input 
                    id={types.fruits}
                    onChange={() => this.handleRadioButtonChange(types.fruits)}
                    checked={this.state.activeOption === types.fruits}
                    // onChange={this.props.onAddItem.bind(this)} 
                    type="radio" 
                    name="category" 
                    value={fruits}/>
                    fruits
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                     id={types.sweets}
                     onChange={() => this.handleRadioButtonChange(types.sweets)}
                     checked={this.state.activeOption === types.twitter}
                      type="radio" name="category" value={sweets}/>
                    sweets
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input 
                    id={types.meat}
                    onChange={() => this.handleRadioButtonChange(types.meat)}
                    checked={this.state.activeOption === types.twitter}
                    type="radio" name="category" value={meat}/>
                    meat
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input 
                    id={types.vegetables}
                    onChange={() => this.handleRadioButtonChange(types.vegetables)}
                    checked={this.state.activeOption === types.twitter}
                     type="radio" name="category" value={vegetables}/>
                    vegetables
                  </label>
                </div>
          
              
              
            <Button onAddShopItem={this.props.onAddShopItem}>add new item</Button>
          </form>
        </div>
      
    )
  }
};


export default Form;