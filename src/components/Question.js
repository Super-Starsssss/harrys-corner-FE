import React, {useState, useEffect} from 'react'

export const Question = ({question, index}) => {

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  
  return (
    <div>
        <div className="container mt-sm-5 my-1">
          <div className="question ml-sm-5 pl-sm-5 pt-2">
            <div className="py-2 h5"><b>{index + 1}.{question.name}</b></div>
            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
              {shuffle(question.answers).map(answer => (
                <div>
                  <label className="options" key={100- answer.id}>{answer.name}
                    <input type="radio" name="radio" /> <span className="checkmark"></span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Question
