const display = document.querySelector(".screen");
const btns = document.querySelectorAll(".calculator-button");

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
    console.log("itemText", itemText);
    console.log("previousITEM", previousItemText);

    if (itemText !== "←" && itemText !== "AC" && itemText !== "=") {
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
  });
});

const sinCalculate = () => {
  display.value = parseFloat(
    Math.tan((eval(input.textContent) / 180) * Math.PI)
      .toFixed(8)
      .toString()
  );
};

const cos = () => {};
const tan = () => {};
const sqr = () => {};
const pow = () => {};
