import './NewCost.css'
import CostForm from "./CostForm";

const NewCost = (props) => {

    const saveNewCost = (costData) => {
        const cost = {
            ...costData,
            id: Math.random().toString() //временно
        }
      props.onAddCost(cost)
    }

    return (
        <div className="new-cost">
            <CostForm onSaveNewCost={saveNewCost}/>
        </div>
    );
}

export default NewCost;