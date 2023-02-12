import './CostItem.css';
import CostDate from "./CostDate";
import Card from "../common/Card";
// import React, { useState } from "react";

const CostItem = props => {

    // const [description, setDescription] = useState(props.description);
    const description = props.description;

    const changeHandler = () => {
        // setDescription("New value")
    }

    return (
        <Card className='cost-item'>
            <CostDate date={props.date}/>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
            <button onClick={changeHandler}>Change</button>
        </Card>
    );
}


export default CostItem;