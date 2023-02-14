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

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear
    })

    let costsContent = <p>В этом году не было трат.</p>;

    if (filteredCosts.length > 0) {
        costsContent = filteredCosts.map(cost => (
            <CostItem
                key={cost.id}
                date={cost.date}
                description={cost.description}
                amount={cost.amount}
            />
        ))
    }

    return (
        <Card className='costs'>
            <CostsFilter year={selectedYear}
                         onChangeYear={changeYearHandler}/>
            {costsContent}
        </Card>
    );
};

export default Costs;