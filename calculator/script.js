const display = document.querySelector(".screen");
const btns = document.querySelectorAll(".calculator-button");

const sinCalculate = () => {};

btns.forEach((item) => {
  let previousItemText;
  const operationSymbols = "/ * + -";
  item.addEventListener("click", (event) => {
    let itemText = event.target.textContent;
    if (itemText === "x") {
      itemText = "*";
    }
    if (itemText === "÷") {
      itemText = "/";
    }

    if (itemText === "AC") {
      display.value = "";
    }
    if (itemText === "←") {
      display.value = display.value.slice(0, -1);
    }

    if (
      itemText !== "←" &&
      itemText !== "AC" &&
      itemText !== "=" &&
      itemText !== "x²" &&
      itemText !== "√" &&
      itemText !== "cos" &&
      itemText !== "sin" &&
      itemText !== "tan"
    ) {
      previousItemText = itemText;
      display.value += itemText;
      displayArray = display.value.split("");

      displayArray.forEach((number, index) => {
        if (
          operationSymbols.includes(number) &&
          operationSymbols.includes(displayArray[index - 1])
        ) {
          display.value = display.value.slice(0, -2);
          display.value += itemText;
        }
      });
    }
    if (itemText === "=") {
      display.value = eval(display.value); //Можно подправить
    }
    if (itemText === "x²") {
      display.value = Math.pow(eval(display.value), 2);
    }
    if (itemText === "√") {
      display.value = Math.sqrt(eval(display.value));
    }
    if (itemText === "sin") {
      display.value = Math.sin((eval(display.value) / 180) * Math.PI).toFixed(
        3
      );
    }
    if (itemText === "cos") {
      display.value = Math.cos((eval(display.value) / 180) * Math.PI).toFixed(
        3
      );
    }
    if (itemText === "tan") {
      display.value = Math.tan((eval(display.value) / 180) * Math.PI).toFixed(
        3
      );
    }
  });
});
