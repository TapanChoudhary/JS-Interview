const capitalizeFirstChar = sentence => {
  let words = sentence.split(" ");
  let processedSentence = "";
  words.forEach(item => {
    //Note - item.slice(1) can also be used for same result
    let processedWord = item[0].toUpperCase() + item.substring(1);
    processedSentence = processedSentence + " " + processedWord;
  });
  return processedSentence;
};

console.log(capitalizeFirstChar("a lazy fox running in the ground"));
