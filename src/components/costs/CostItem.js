import './CostItem.css';
import CostDate from "./CostDate";
import Card from "../common/Card";

const CostItem = props => (
    <Card className='cost-item'>
        <CostDate date={props.date}/>
        <div className='cost-item__description'>
            <h2>{props.description}</h2>
            <div className='cost-item__price'>${props.amount}</div>
        </div>
    </Card>
);

export default CostItem;