import React from 'react'

function Calculator() {
    const [number1, setNumber1] = React.useState(0)
    const [number2, setNumber2] = React.useState(0)
    const [total, setTotal] = React.useState()

    const num1 = parseInt(number1)
    const num2 = parseInt(number2)
    const AddClick = () => {
        const hello = num1 + num2
        setTotal(hello)
    }
    const multipleClick = () => {
        setTotal(num1*num2)
    }
    const divClick = () => {
        if(num1>num2){
            setTotal(num1/num2)
        }
        else{
            setTotal(num1/num2)
        }
    }
    const subClick = () => {
        if(num1>num2){
            setTotal(num1-num2)
        }
        else{
            setTotal(num1-num2)
        }
    }
    return(
        <div>
            <input type = "number" 
                value = {number1}
                onChange = {event => setNumber1(event.target.value)}

            />
            <input type = "number" 
                value = {number2}
                onChange = {event => setNumber2(event.target.value)}
            />
            <h5>{total}</h5>
            <div>
                <button onClick = { () => AddClick()}>Addition</button>
            </div>
            <div>
                <button onClick = { () => multipleClick()}>Multiplication</button>
            </div>
            
            <div>
                <button onClick = { () => divClick()}>division</button>
            </div>
            <div>
                <button onClick = { () => subClick()}>Subtraction</button>
            </div>
            
            
        </div>
    )
}
export default Calculator