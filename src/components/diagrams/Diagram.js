import './Diagram.css'
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {

    const dataSetsValues = props.dataSets.map(data => data.value)
    const maxValue = Math.max(...dataSetsValues)

    return (
        <div className='diagram'>
            {props.dataSets.map(dataSet => {
                return <DiagramBar
                    key={dataSet.id}
                    value={dataSet.value}
                    maxValue={maxValue}
                    label={dataSet.label}/>
            })}
        </div>
    )
}

export default Diagram;