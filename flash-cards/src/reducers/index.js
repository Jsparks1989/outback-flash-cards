import { combineReducers } from 'redux';



const questionAnswerReducer = () => {
    return [
        {
            question: 'How many sides come with the sirloin?',
            answer: '2'
        },
        {
            question: 'What sizes do our sirloin come in?',
            answer: '6oz, 9oz and 12oz'
        },
        {
            question: 'What are the baked potato toppings?',
            answer: 'butter, sour cream, bacon bits, cheese and chives'
        },
        {
            question: 'What tempterature does our walk-in cooler need to be kept at?',
            answer: '40 degrees'
        },
        {
            question: 'How long until drinks need to be taken to your table?',
            answer: 'two minutes'
        },
        {
            question: 'is the ribeye cooked on the flat-top or woodfire grill',
            answer: 'woodfire grill'
        },
        {
            question: 'Test question 1',
            answer: 'Test answer 1'
        },
        {
            question: 'Test question 2',
            answer: 'Test answer 2'
        },
        {
            question: 'Test question 3',
            answer: 'Test answer 3'
        },
        {
            question: 'Test question 4',
            answer: 'Test answer 4'
        },
    ];
}



export default combineReducers({
    questionAnswer: questionAnswerReducer
});