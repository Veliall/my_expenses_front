import Costs from "./components/costs/Costs";
import NewCost from "./components/newCost/NewCost";

const App = () => {

    const costs = [
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
    
    const addCostHandler = (cost) => {
      console.log(cost)
    }

    return (
        <div className="App">
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
    );
};

export default App;
