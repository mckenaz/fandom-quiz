import { useState } from 'react';
import { questions, resultsData, type PersonalityType } from './quizData';

export default function Quiz() {
  const [appState, setAppState] = useState<'start' | 'quiz' | 'result'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scoresHistory, setScoresHistory] = useState<Record<PersonalityType, number>[]>([]);
  
  // Track scores for all 5 dimensions
  const [scores, setScores] = useState<Record<PersonalityType, number>>({
    COP: 0,
    ZZZZ: 0,
    FAKE: 0,
    '404': 0,
    QKIN: 0,
  });

  const handleStart = () => setAppState('quiz');

  const handleAnswerClick = (pointsTo: PersonalityType[]) => {
    // Save current score state to history before updating
    setScoresHistory([...scoresHistory, scores]);

    // 1. Update scores based on the selected answer's tags
    const newScores = { ...scores };
    pointsTo.forEach(trait => {
      newScores[trait] += 1;
    });
    setScores(newScores);

    // 2. Move to next question or calculate results
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setAppState('result');
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      const previousScores = scoresHistory[scoresHistory.length - 1];
      setScores(previousScores);
      setScoresHistory(scoresHistory.slice(0, -1));
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const getFinalResult = (): PersonalityType => {
    // Priority tie-breaker: ZZZZ > 404 > QKIN > FAKE > COP
    // Note: User wrote '404' twice, assuming the second one meant 'FAKE'
    const priority: PersonalityType[] = ['ZZZZ', '404', 'QKIN', 'FAKE', 'COP'];

    return (Object.keys(scores) as PersonalityType[]).reduce((a, b) => {
      if (scores[a] > scores[b]) return a;
      if (scores[b] > scores[a]) return b;
      // If it's a tie, the one with the smaller index in the priority array wins
      return priority.indexOf(a) < priority.indexOf(b) ? a : b;
    });
  };

  const handleRestart = () => {
    setAppState('start');
    setCurrentQuestionIndex(0);
    setScoresHistory([]);
    setScores({
      COP: 0,
      ZZZZ: 0,
      FAKE: 0,
      '404': 0,
      QKIN: 0,
    });
  };

  if (appState === 'start') {
    return (
      <div className="start-screen">
        <h1>The Ultimate Chinese Fandom Survival Test</h1>
        <p>Welcome to the digital trenches. We are about to find out exactly how you survive the absolute chaos of the digital third space. This is not your average personality quiz. We are diving deep into fandom drama and internet censorship to expose your true online vibe.</p>
        <div className="warning">
          <strong>Trigger Warning:</strong> This quiz mentions cyberbullying and state censorship. It touches on homophobia and fandom toxicity. Please proceed with caution if these topics cause you stress.
        </div>
        <button onClick={handleStart}>Take the quiz</button>
      </div>
    );
  }

  if (appState === 'quiz') {
    const currentQ = questions[currentQuestionIndex];
    return (
      <div className="quiz-screen" key={`quiz-${currentQuestionIndex}`}>
        <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
        <h2>{currentQ.text}</h2>
        <div className="options-container">
          {currentQ.answers.map((answer, index) => (
             <button 
               key={index} 
               onClick={() => handleAnswerClick(answer.pointsTo)}
             >
               {answer.text}
             </button>
          ))}
        </div>
        {currentQuestionIndex > 0 && (
          <button 
            onClick={handlePreviousClick} 
            style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1rem' }}
          >
            Previous
          </button>
        )}
      </div>
    );
  }

  if (appState === 'result') {
    const finalTrait = getFinalResult();
    const result = resultsData[finalTrait];
    
    return (
      <div className="result-screen">
        <h1>Your Personality is: {finalTrait}</h1>
        <h2>{result.title}</h2>
        <p>{result.description}</p>
        {/* Optional: Show them their actual point breakdown for fun */}
        <div className="debug-scores" style={{ marginTop: '20px', fontSize: '0.8rem', opacity: 0.7 }}>
           <p>Your Stats: COP: {scores.COP} | ZZZZ: {scores.ZZZZ} | FAKE: {scores.FAKE} | 404: {scores['404']} | QKIN: {scores.QKIN}</p>
        </div>
        <button onClick={handleRestart} style={{ marginTop: '30px' }}>Take the Quiz Again</button>
      </div>
    );
  }
}