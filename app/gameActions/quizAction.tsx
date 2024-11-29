import { incrementScore, resetScore, getScore } from '../../public/lib/data/globalState';

export const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
        incrementScore();
    }
};

export const resetGame = () => {
    resetScore();
};

export const getCurrentScore = () => {
    return getScore();
};
