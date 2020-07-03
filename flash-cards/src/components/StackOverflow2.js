//-- How do I get a random element from an array when a button is clicked?

//-- Declare a state 'randomNumber' and update that using setState.
//   React would re-render when your state updates.
//   Try this:



import React from 'react';
import { connect } from 'react-redux';


class FlashCards extends React.Component {

    state = {
       randomNumber: 0
    }

    randomQuestion = (arry=[]) => {
        var num = Math.floor(Math.random() * arry.length);
        //const display = arry[Math.floor(Math.random() * arry.length)];
        this.setState({randomNumber: num});
    }


    flipDisplay = () => {
        // your flipDisplay function, no changes here
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

export default connect(mapStateToProps)(FlashCards);