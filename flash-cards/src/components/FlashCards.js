import React from 'react';
import { connect } from 'react-redux';


class FlashCards extends React.Component {


    randomNumber = 0;

    randomQuestion = (arry=[]) => {
        var num = Math.floor(Math.random() * arry.length);
        //const display = arry[Math.floor(Math.random() * arry.length)];
        this.randomNumber = num;
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
        console.log(this.randomQuestion().num);
        return(
            <div className='ui container'>
                <div id='question'>
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