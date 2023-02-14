import Costs from "./components/costs/Costs";
import NewCost from "./components/newCost/NewCost";
import {useState} from "react";

const INITIAL_COSTS = [
    {
        id: '1',
        date: new Date(2021, 2, 12),
        description: 'Холодильник',
        amount: 999.99,
    },
    {
        id: '2',
        date: new Date(2021, 11, 22),
        description: 'Honor Magic Book',
        amount: 1299.99,
    },
    {
        id: '3',
        date: new Date(2021, 6, 12),
        description: 'Honor Magic Watch',
        amount: 99.50,
    }
]

const App = () => {

    const [costs, setCosts] = useState(INITIAL_COSTS)

    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        })
    }

    return (
        <div className="App">
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
    );
};

export default App;
