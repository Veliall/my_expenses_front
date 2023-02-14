import './Costs.css'
import CostItem from "./CostItem";
import Card from "../common/Card";
import CostsFilter from "../costFilter/CostsFilter";
import {useState} from "react";

const Costs = props => {
    const [selectedYear, setSelectedYear] = useState('2021')

    const changeYearHandler = (year) => {
        setSelectedYear(year)
    }

    return (
        <Card className='costs'>
            <CostsFilter year={selectedYear}
                         onChangeYear={changeYearHandler}/>
            {props.costs.map(cost => (
                <CostItem
                    key={cost.id}
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}
                />
            ))}
        </Card>
    );
};

export default Costs;