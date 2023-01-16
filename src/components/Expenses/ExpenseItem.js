import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
    // useState是一个重要的hook
    // title 是current值  setTitle是改变title的function
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        //调用settitle方法后title的值并不是全部更新
        setTitle('Updated');
        console.log(title)
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;