class FizzBuzz {
  play(number) {
    let result = "";
    let isMultiple = false;

    if (number % 3 === 0) {
      result += "Fizz";
      isMultiple = true;
    }

    if (number % 5 === 0) {
      result += "Buzz";
      isMultiple = true;
    }

    if (!isMultiple) {
      result = String(number);
    }

    return result;
  }
}
