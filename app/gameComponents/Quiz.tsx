import React, { useState } from 'react';
import './Quiz.css';

interface Answer {
    text: string;
    isCorrect: boolean;
}

interface QuizProps {
    question: string;
    answers: Answer[];
}

const Quiz: React.FC<QuizProps> = ({ question, answers }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

    const handleSubmit = () => {
        const isCorrect = answers.find(answer => answer.text === selectedAnswer)?.isCorrect || false;
        setSubmitted(true);

        if (isCorrect) {
            setFeedbackMessage("Correct!");
        } else {
            setFeedbackMessage("That's not correct! Try again.");
            setSelectedAnswer(null);
            setSubmitted(false);
        }
    };

    return (
        <div className="quiz-container">
            <h2>{question}</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="radio"
                                name="quiz"
                                value={answer.text}
                                checked={selectedAnswer === answer.text}
                                onChange={() => setSelectedAnswer(answer.text)}
                                disabled={submitted && answer.text !== selectedAnswer}
                            />
                            {answer.text}
                        </label>
                    </li>
                ))}
            </ul>
            <button
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className="quiz-button"
            >
                Submit Answer
            </button>
            {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
        </div>
    );
};

export default Quiz;
