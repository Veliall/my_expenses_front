import './Costs.css'
import CostItem from "./CostItem";
import Card from "../common/Card";
import CostsFilter from "../costFilter/CostsFilter";
import {useState} from "react";

const Costs = props => {
    const costs = props.costs;

    const [selectedYear, setSelectedYear] = useState('2021')

    const changeYearHandler = (year) => {
        setSelectedYear(year)
    }

    return (
        <Card className='costs'>
            <CostsFilter year={selectedYear}
                onChangeYear={changeYearHandler}/>
            <CostItem date={costs[0].date}
                      description={costs[0].description}
                      amount={costs[0].amount}
            />
            <CostItem date={costs[1].date}
                      description={costs[1].description}
                      amount={costs[1].amount}
            />
            <CostItem date={costs[2].date}
                      description={costs[2].description}
                      amount={costs[2].amount}
            />
        </Card>
    );
};

export default Costs;