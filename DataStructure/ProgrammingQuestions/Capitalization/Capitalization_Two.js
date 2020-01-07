const capitalizeFirstChar = sentence => {
  let words = sentence.split(" ");
  let processedSentence = [];

  words.forEach(word => {
    let processedWord = word[0].toUpperCase() + word.slice(1);
    processedSentence.push(processedWord);
  });

  return processedSentence.join(" ");
};

console.log(capitalizeFirstChar("a lazy fox running in the ground"));
