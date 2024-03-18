function calculate(num1, num2, operator) {
  // Перевірка при діленні на 0
  if (operator === "/" && num2 === 0) {
    throw new Error("Другий параметр не може бути 0 при операції ділення");
  }
  // Перевірка типів аргументів
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof operator !== "string"
  ) {
    throw new Error(
      "Перший та другий параметри повинні бути числами, а третій рядком"
    );
  }

  // Перевірка допустимих значень оператора
  if (!["+", "-", "*", "/"].includes(operator)) {
    throw new Error("Третій параметр повинен бути +,-,/ або *");
  }

  // Перевірка на кількість аргументів
  if (arguments.length !== 3) {
    throw new Error("Кількість аргументів не повинна бути більше 3-х");
  }

  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }

  return `${num1} ${operator} ${num2} = ${result}`;
}

try {
  console.log(calculate(100, 5, "*"));
} catch (error) {
  console.log(`Error: ${error.message}`);
}
