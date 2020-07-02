import React from 'react';
import { connect } from 'react-redux';


class FlashCards extends React.Component {

    randomQuestion = (arry) => {
        const display = arry[Math.floor(Math.random() * arry.length)].question;
       return display;
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
    //-- Flip button not working. Need to have both the question and answer from object set to two different divs. 
    //   The answer div will be hidden. When the flip button is clicked, will trigger a function that will set question
    //   div to hidden and the answer div to display. Then flipped again when Flip button is clicked again.


    render() {
        return(
            <div className='ui container'>
                <div id='question'>
                {/* {this.randomQuestion(this.props.questionAnswer)} */}
                { this.props.questionAnswer[1].question }
                </div>
                <div id='answer' style={{ display: 'none' }}>
                { this.props.questionAnswer[1].answer }
                </div>
                
                <div>
                    <button className='ui button' onClick={this.flipDisplay}>Flip</button>
                    <button className='ui button' onClick={this.randomQuestion(this.props.questionAnswer)}>Next</button>
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