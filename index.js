const getLastNumber = () => {
  const lastNumber = Number(prompt("Input the last number"));
  if (lastNumber > 0) {
    return lastNumber;
  } else {
    return getLastNumber();
  }
}

const getEvenOrOdd = () => {
  const evenOrOdd = prompt("Choose even or odd").toLowerCase();
  if (evenOrOdd === "odd" || evenOrOdd === "even") {
    return evenOrOdd;
  } else {
    return getEvenOrOdd();
  }
}

const showNumber = (lastNumber, evenOrOdd) => {
  console.log(`${evenOrOdd} number from 1 - ${lastNumber}`);
  if (evenOrOdd === 'odd') {
    for (let number = 1; number <= lastNumber; number++) {
      if (number % 2 !== 0) {
        console.log(number);
      }
    }
  } else {
    for (let number = 1; number <= lastNumber; number++) {
      if (number % 2 === 0) {
        console.log(number);
      }
    }
  }
}

const lastNumber = getLastNumber();
const evenOrOdd = getEvenOrOdd();
showNumber(lastNumber, evenOrOdd);
