import React, { useState, useEffect } from 'react';

const Exam = () => {


  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.replace('/login')
    }
    fetchData();
  }, []);

  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    const items = await fetch('http://localhost:3000/api/v1/questions',{
      headers:{Authorization: localStorage.getItem('token')}
    });
    let questions = await items.json();
    // if (questions === 401){
    //   window.location.replace('/login')
    // }
    setQuestions(questions);
  }

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

  const sendData = () => {
    const arr = checkScore();

    function checkConditionFilter(val) {
      return val === "true"
    }
    const temp = arr.filter(checkConditionFilter);
    const score = temp.length;
    alert(score * 100 / 25 + "/100");
  }

  function checkScore() {
    const array = [];
    var inputs = document.querySelectorAll('.checkbox');
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked)
        array.push(inputs[i].value);
      else
        continue;
    }
    return array;
  }

  const titleStyle = {
    fontWeight: 'bold'
  }

  return (
    <div>
      <div className="container d-flex">
        <div className="row">
        <div className="col-md-12 col-sm-12">
          <img src="https://media.aidaform.com/us-east-1%3Ab765a52f-d072-464f-ace9-21845b64c736/rd9hclc9fk.png" alt="" style={{ width: 290, height: 165 }} />
          <h1 style={titleStyle} >Online Grammar Test</h1>
          <p>This english grammar test contains five sections with different grammar subjects.
            Your test result will help us determine your English level. </p>
          <p>After you finish, we will send you an email with the correct answers and your test results.</p>
          <div>
            <h3>CONDITIONAL SENTENCES</h3>
            <hr />
          </div>
          {questions.map((question, index) => (
            <div className="container mt-sm-5 my-1 border m-0" key={index}>
              <div className="question ml-sm-5 pl-sm-5 pt-2">
                <div className="py-2 h5 p-0 mb-0"><b >{index + 1}.{question.name}</b></div>
                <hr />
                <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                  {shuffle(question.answers).map((answer, i) => (
                    <div key={i}>
                      <label className="options" >{answer.name}
                        <input type="radio" name={question.id} value={answer.check} className="checkbox" /> <span className="check_mark"></span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary" onClick={sendData}>Finish Test</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Exam
