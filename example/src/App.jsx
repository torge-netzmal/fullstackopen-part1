import { useState } from 'react'

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = (props) => (
    <button onClick={props.onClick}>
        {props.text}
    </button>
)

const Display = props => <div>{props.value}</div>

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [value, setValue] = useState(10)

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }


    const setToValue = (newValue) => {
        console.log('value now', newValue)  // print the new value to console
        setValue(newValue)
    }


    return (
        <div>

            {left}
            <Button onClick={handleLeftClick} text='left' />
            <Button onClick={handleRightClick} text='right' />
            {right}
            <History allClicks={allClicks} />
            <div>
                <Display value={value} />
                <Button onClick={() => setToValue(1000)} text="thousand" />
                <Button onClick={() => setToValue(0)} text="reset" />
                <Button onClick={() => setToValue(value + 1)} text="increment" />
            </div>
        </div>
    )
}


export default App
