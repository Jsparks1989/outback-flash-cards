import React from 'react';
import { connect } from 'react-redux';


class FlashCards extends React.Component {


    randomNumber = 0;
    //-- Only needs to return a random number between 0 and array.length-1. This number will be used as the index number for the array
    //   and will determine the QA object that will be displayed.
    randomQuestion = (arry) => {
        //-- num is generating the random number for the array index. Now 
        //   need to figure out how to insert the number into props.questionAnswer[] for 
        //   the index.
        const num = Math.floor(Math.random() * arry.length);
        // this.randomNumber = num;
        // console.log(this.randomNumber);
        const display = arry[Math.floor(Math.random() * arry.length)];
        console.log(num);
       //return display;
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


    //-- Next button not working. Try having the array of questions displayed and have the next button
    //   seed the array with a random array index number.
    //-- I need a question/answer object to be displayed immediately when component loads (possibly use componentDidMount() https://www.w3schools.com/react/react_lifecycle.asp).
    //   Once the initial question/answer object loads, I need the Next button to pick a random question/answer object from the array to display next.

    //-- Trying to seed the array index with randomNumber. randomNumber is being set to the 


    render() {
        console.log(this.randomQuestion().num);
        return(
            <div className='ui container'>
                <div id='question'>
                {/* {this.randomQuestion(this.props.questionAnswer)} */}
                { this.props.questionAnswer[this.randomNumber].question }
                </div>
                <div id='answer' style={{ display: 'none' }}>
                { this.props.questionAnswer[this.randomNumber].answer }
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