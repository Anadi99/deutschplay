export const calculateXP = (correctGuess, sentenceBonus) => {
  return correctGuess*10 + sentenceBonus*5;
}
