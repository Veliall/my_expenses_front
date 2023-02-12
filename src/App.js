import CostItem from "./components/CostItem";

function App() {

    const costs = [
        {
            date: new Date(2021, 2, 12),
            description: 'Холодильник',
            amount: 999.99,
        },
        {
            date: new Date(2021, 11, 22),
            description: 'Honor Magic Book',
            amount: 1299.99,
        },
        {
            date: new Date(2021, 6, 12),
            description: 'Honor Magic Watch',
            amount: 99.50,
        }
    ]

    return (
        <div className="App">
            <h1>Hello React!</h1>
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
        </div>
    );
}

export default App;
