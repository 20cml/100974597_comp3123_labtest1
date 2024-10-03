function lowerCaseWords(mixedArray) {
    return mixedArray
      .filter(item => typeof item === 'string')
      .map(word => word.toLowerCase());
  }
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  
  const lowercaseWords = lowerCaseWords(mixedArray);
  
  if (lowercaseWords.length > 0) {
    console.log('lower case words:', lowercaseWords);
  } else {
    console.error('no strings found.');
  }

