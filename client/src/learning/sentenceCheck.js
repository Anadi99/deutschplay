export function validateSentence(sentence, word) {
  return sentence.includes(word) && sentence.split(' ').length>=3;
}
