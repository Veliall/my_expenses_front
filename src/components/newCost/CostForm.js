import './CostForm.css'
import {useState} from "react";

const CostForm = (props) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const changeNameHandler = (event) => {
        setName(event.target.value)
    }
    const changeAmountHandler = (event) => {
        setAmount(event.target.value)
    };
    const changeDateHandler = (event) => {
        setDate(event.target.value)
    };

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // });

    // const changeNameHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         name: event.target.value
    //     })
    // };
    // const changeAmountHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         amount: event.target.value
    //     })
    // };
    // const changeDateHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         date: event.target.value
    //     })
    // };

    const submitHandler = (event) => {
        event.preventDefault()
        const cost = {
            name: name,
            amount: amount,
            date: new Date(date)
        }

        props.onSaveNewCost(cost)

        setName('')
        setAmount('')
        setDate('')
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__control'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input type="text"
                           onChange={changeNameHandler}
                           value={name}/>
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input type="number" min='0.01' step='0.01'
                           onChange={changeAmountHandler}
                           value={amount}/>
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input type="date"
                           onChange={changeDateHandler}
                           value={date}/>
                </div>
                <div className='new-cost__actions'>
                    <button type="submit">Добавить расход</button>
                </div>
            </div>
        </form>
    );
}

export default CostForm;