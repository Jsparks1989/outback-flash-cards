//-- How do I get a random element from an array when a button is clicked?

//-- Declare a state 'randomNumber' and update that using setState.
//   React would re-render when your state updates.
//   Try this:


//-- Solution Works! --//
//=======================

//-- The possible issue before was that the state was not 
//   changing/updating so the component was not being re-rendered to show the changes.

//-- Will keep this solution for now. Possible change in the near future is to make randomNumber
//   a reducer that checks for an action. The Next button will trigger the action which will have 
//   a payload of a random number. So everytime Next is clicked, the randomQuestion will generate a random number,
//   set the random number as action.payload, and update randomNumber reducer with it. 


import React from 'react';
import { connect } from 'react-redux';


//class FlashCards extends React.Component {
class StackOverflow2 extends React.Component{
    state = {
       randomNumber: 0
    }

    randomQuestion = (arry=[]) => {
        var num = Math.floor(Math.random() * arry.length);
        //const display = arry[Math.floor(Math.random() * arry.length)];
        this.setState({randomNumber: num});
        //-- Add code that will reset answer.style.display:'none'. 
        //   Have a bug that shows the answer first, not question, sometimes when Next is clicked. 
    }


    flipDisplay = () => {
        const x = document.getElementById("question");
        const y = document.getElementById("answer");
        if (x.style.display === 'none' && y.style.display === 'block') {
          x.style.display = 'block';
          y.style.display = 'none'
        } else {
          x.style.display = 'none';
          y.style.display = 'block'
        }
    }


    render() {
        return(
            <div className='ui container'>
                <div id='question'>
                { this.props.questionAnswer[this.state.randomNumber].question }
                </div>
                <div id='answer' style={{ display: 'none' }}>
                { this.props.questionAnswer[this.state.randomNumber].answer }
                </div>
                
                <div>
                    <button className='ui button' onClick={this.flipDisplay}>Flip</button>
                    <button className='ui button' onClick={() => this.randomQuestion(this.props.questionAnswer)}>Next</button>
                </div>
            </div>
        );
    }
}




const mapStateToProps = (state) => {
    return {
        questionAnswer: state.questionAnswer
    };
}

//export default connect(mapStateToProps)(FlashCards);
export default connect(mapStateToProps)(StackOverflow2);