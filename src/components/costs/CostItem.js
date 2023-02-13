import './CostItem.css';
import CostDate from "./CostDate";
import Card from "../common/Card";

const CostItem = props => {

    const description = props.description;

    return (
        <Card className='cost-item'>
            <CostDate date={props.date}/>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}


export default CostItem;