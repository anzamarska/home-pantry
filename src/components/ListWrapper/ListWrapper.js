import React from 'react';
import ListItem from './ListItem/ListItem';
import Title from "../Title/Title";
import style from './ListWrapper.module.scss';
import FlipMove from 'react-flip-move';

const customLeaveAnimation = {
    from: { transform: 'scale(1, 1)' },
    to:   { transform: 'scale(0.5, 1) translateY(-20px)' }
  };

const ListWrapper = (props) => (
    
        <div className={style.wrapper}>
            <Title>home eating stuff</Title>
            <FlipMove leaveAnimation={customLeaveAnimation}>
            <ul className={style.ul}>  
                {props.items.map(item => (
                <ListItem 
                key={item.name} 
                onAddAmount={props.onAddAmount} 
                onSubAmount={props.onSubAmount} 
                onConfirmDelete={props.onConfirmDelete} 
                onAddShopItem={props.onAddShopItem} 
                {...item} />
                ))}
            </ul></FlipMove>
            {/* <ul className={style.ul}>  
                {props.items.map(item => (<ListItem key={item.name} onAddAmount={props.onAddAmount} onSubAmount={props.onSubAmount} onConfirmDelete={props.onConfirmDelete} {...item} />
                ))}
            </ul> */}
        </div>
    
)

export default ListWrapper;