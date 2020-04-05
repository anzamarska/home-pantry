import React from 'react';
import ListItem from './ListItem/ListItem';
import Title from "../Title/Title";
import style from './ListWrapper.module.scss';

const ListWrapper = (props) => (
    <div className={style.wrapper}>
        <Title>home eating stuff</Title>
        <ul className={style.ul}>  
            {props.items.map(item => (<ListItem key={item.name} {...item} />
            ))}
        </ul>
    </div>
)

export default ListWrapper;