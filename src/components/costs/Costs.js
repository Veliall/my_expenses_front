import './Costs.css'
import Card from "../common/Card";
import CostsFilter from "../costFilter/CostsFilter";
import {useState} from "react";
import CostList from "./CostList";
import CostDiagram from "../diagrams/CostDiagram";

const Costs = props => {
    const [selectedYear, setSelectedYear] = useState('2021')

    const changeYearHandler = (year) => {
        setSelectedYear(year)
    }

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear
    })

    return (
        <Card className='costs'>
            <CostsFilter year={selectedYear}
                         onChangeYear={changeYearHandler}/>
            <CostDiagram costs={filteredCosts}/>
            <CostList costs={filteredCosts}/>
        </Card>
    );
};

export default Costs;