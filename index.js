const inputMaximumNumber = () => {
  const maximumNumber = Number(prompt("Input the maximum number"));

  if (maximumNumber > 0) {
    return maximumNumber;
  } else {
    return inputMaximumNumber();
  }
};

const chooseEvenOrOdd = () => {
  const evenOrOdd = prompt("Choose even or odd").toLowerCase();

  if (evenOrOdd === "odd" || evenOrOdd === "even") {
    return evenOrOdd;
  } else {
    return chooseEvenOrOdd();
  }
};

const generateNumbers = (maximumNumber, evenOrOdd) => {
  console.log(`${evenOrOdd} number from 1 - ${maximumNumber}`);

  if (evenOrOdd === "odd") {
    for (let number = 1; number <= maximumNumber; number++) {
      if (number % 2 !== 0) {
        console.log(number);
      }
    }
  } else if (evenOrOdd === "even") {
    for (let number = 1; number <= maximumNumber; number++) {
      if (number % 2 === 0) {
        console.log(number);
      }
    }
  } else {
    console.log("Cannot generate odd or even numbers");
  }
};

const startButton = document.querySelector("button");

startButton.addEventListener("click", () => {
  const maximumNumber = inputMaximumNumber();
  const evenOrOdd = chooseEvenOrOdd();
  generateNumbers(maximumNumber, evenOrOdd);
});
