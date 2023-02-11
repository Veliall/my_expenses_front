import './CostItem.css';

function CostItem(props) {

    const day = props.date.toLocaleString("ru-RU", {day: "2-digit"});
    const month = props.date.toLocaleString("ru-RU", {month: "long"});
    const year = props.date.getFullYear();

    return (
        <div className='cost-item'>
            <div>
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default CostItem;