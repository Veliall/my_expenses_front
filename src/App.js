import Costs from "./components/costs/Costs";

const App = () => {

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
            <Costs costs={costs}/>
        </div>
    );
};

export default App;
