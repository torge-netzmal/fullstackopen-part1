import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.onClick}>
        {props.text}
    </button>
)

const Feedback = (props) => {
    return (
        <div>
            <h2>give feedback</h2>
            <Button onClick={props.handleGood} text={"good"}/>
            <Button onClick={props.handleNeutral} text={"neutral"}/>
            <Button onClick={props.handleBad} text={"bad"}/>
        </div>
    )
}

const Statistics = (props) => {

    const all = props.good + props.neutral + props.bad;
    if (all === 0) {
        return (<div><h2>statistics</h2><p>No feedback given</p></div>)
    }
    const average = (props.good - props.bad) / all;
    const positive = props.good/all;

    return (
        <div>
            <h2>statistics</h2>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}%</p>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1);
    }
    const handleNeutral = () => {
        setNeutral(neutral + 1);
    }
    const handleBad = () => {
        setBad(bad + 1);
    }

    return (
        <div>
            <Feedback
                handleGood={() => handleGood()}
                handleNeutral={() => handleNeutral()}
                handleBad={() => handleBad()}
            />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App