//-- How do I get a random element from an array when a button is clicked?


//-- First of all I would get rid of the class structure, use a functional
//   component instead. Second, get rid of the setState etc. use the newer 
//   React hooks: https://reactjs.org/docs/hooks-state.html
//   Your code readability will improve greatly.


import React, {useState} from "react";

const questionAnswer: [
    {question: "Question 1", answer: "Answer 1"},
    {question: "Question 2", answer: "Answer 2"},
    {question: "Question 3", answer: "Answer 3"},
    {question: "Question 4", answer: "Answer 4"}
];

export const FlashCards = ({questionAnswer}) => {
    
    const [randomNumber, setRandomNumber] = useState(0)
    
    const flipDisplay = () => {
        // Logic flip display here.
    }
    
    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * questionAnswer.length);
        setRandomNumber(randomNumber)
    }

    return (
        <div className='ui container'>
            <div id='question'>
                {questionAnswer[randomNumber].question}
            </div>
            <div id='answer' style={{display: 'none'}}>
                {questionAnswer[randomNumber].answer}
            </div>
            <div>
                <button className='ui button' onClick={flipDisplay}>Flip</button>
                <button className='ui button' onClick={generateRandomNumber}>Next</button>
            </div>
        </div>
    )
}