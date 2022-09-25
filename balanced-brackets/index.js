const brackets = {
  "[": "]",
  "{": "}",
  "(": ")"
}

const convertStringToArray = (string) => {
  return string.split("");
}

const checkIsLeftBracket = (bracket) => {
  for (const key in brackets) {
    if (bracket === key) {
      return true;
    }
  }
  return false;
}

const checkBalancedBrackets = (inputBracket) => {
  const tempBracket = [];

  const inputBracketArray = convertStringToArray(inputBracket);
  for (const bracket of inputBracketArray) {
    const isLeftBracket = checkIsLeftBracket(bracket);
    if (isLeftBracket) {
      tempBracket.push(bracket);
    } else {
      if (bracket === brackets[tempBracket[tempBracket.length - 1]]) {
        tempBracket.pop();
      } else {
        return false;
      }
    }
  }

  if (tempBracket.length !== 0) {
    return false;
  }

  return true;
}

const checkWordIsOnlyBracket = (inputBracket) => {
  let isOnlyBracket = true;
  const inputBracketArray = convertStringToArray(inputBracket);
  for (const bracket of inputBracketArray) {
    isOnlyBracket = false;
    for (const key in brackets) {
      if (bracket == key || bracket == brackets[key]) {
        isOnlyBracket = true
      }
    }

    if (!isOnlyBracket) {
      break;
    }
  }
  return isOnlyBracket;
}

const main = () => {
  const inputBrackets = prompt("Input the brackets");
  const isInputBracketsOnlyBracket = checkWordIsOnlyBracket(inputBrackets);
  if (isInputBracketsOnlyBracket) {
    const isBalancedBrackets = checkBalancedBrackets(inputBrackets);
    console.log(`Brackets is${isBalancedBrackets ? " " : " not "}balanced`);
  } else {
    main();
  }
}