import React from 'react';

const Clue = (props) => {
    const { clue } = props;
    return (
        <div className='clue'>
            <li><b>Question : </b>{clue.question}</li>
            <li><b>Answer : </b>{clue.answer}</li>
        </div>
    )
}

export default Clue;