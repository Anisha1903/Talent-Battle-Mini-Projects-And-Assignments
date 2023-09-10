function valueButton(e)
{
  calculatorform.screen.value += e.value;
}

function Clear()
{
  calculatorform.screen.value= null;
}

function calculate()
{
  calculatorform.screen.value = eval(calculatorform.screen.value);
}