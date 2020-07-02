import React from 'react';
import { connect } from 'react-redux';


class FlashCards extends React.Component {

    randomQuestion = (arry) => {
        const display = arry[Math.floor(Math.random() * arry.length)];
        console.log(display);
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


    randomizeQuestion = () => {

    }



    //-- Next button not working. Try having the array of questions displayed and have the next button
    //   seed the array with a random array index number.
    //-- I need a question/answer object to be displayed immediately when component loads (possibly use componentDidMount() https://www.w3schools.com/react/react_lifecycle.asp).
    //   Once the initial question/answer object loads, I need the Next button to pick a random question/answer object from the array to display next.


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