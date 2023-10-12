function basicCalculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
      if (isNaN(num1) || isNaN(num2)) {
        reject("Invalid input. Both inputs should be numbers.");
      } else {
        switch (operation) {
          case "+":
            resolve(num1 + num2);
            break;
          case "-":
            resolve(num1 - num2);
            break;
          case "*":
            resolve(num1 * num2);
            break;
          case "/":
            if (num2 === 0) {
              reject("Division by zero is not allowed.");
            } else {
              resolve(num1 / num2);
            }
            break;
          default:
            reject("Invalid operation. Supported operations are +, -, *, and /.");
        }
      }
    });
  }
  
  // Example usage:
  basicCalculator(45, 55, "+")
    .then((result) => {
      console.log("Result:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  basicCalculator(19, 0, "/")
    .then((result) => {
      console.log("Result:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  