import React, { useState } from 'react';
import './Quiz.css';

function Quiz() {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false); // nova variável de estado para controlar a exibição da mensagem de resposta

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === 'alternativa correta') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowResult(true);
  };

  return (
    <div className='containerquiz'>
      <h1>Pergunta:</h1>
      <p>Qual é a alternativa correta?</p>

        <form className='formularioquiz' onSubmit={handleSubmit}>
            <label>
                <input type="radio" value="alternativa 1" checked={answer === 'alternativa 1'} onChange={handleAnswerChange} />
                Alternativa 1
                </label>
            <label>
                <input type="radio" value="alternativa 2" checked={answer === 'alternativa 2'} onChange={handleAnswerChange} />
                Alternativa 2
            </label>
            <label>
                <input type="radio" value="alternativa correta" checked={answer === 'alternativa correta'} onChange={handleAnswerChange} />
                Alternativa Correta
            </label>
            <label>
                <input type="radio" value="alternativa 4" checked={answer === 'alternativa 4'} onChange={handleAnswerChange} />
                Alternativa 4
            </label>
            <br />

            <button type="submit">Verificar resposta</button>
        </form>
        {showResult && isCorrect && <p className="quiz-result correct">Parabéns, sua resposta correta!</p>}
        {showResult && !isCorrect && <p className="quiz-result incorrect">Resposta incorreta.</p>}
    </div>
  );
}

export default Quiz;
