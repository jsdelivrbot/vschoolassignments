let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log("calculator turning off.");
  calculatorIsOn = false;
} else {
  console.log("Calculator turning on.");
  calculatorIsOn = true;
}
};

pressPowerButton();
pressPowerButton();
