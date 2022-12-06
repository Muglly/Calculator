import React, { useState } from 'react';

import { ButtonsNumber } from '../Components/ButtonsNumber/ButtonsNumber';
import { Visor } from '../Components/Visor/Visor';

export function Home() {
  const [secondNumber, setSecondNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [visor, setVisor] = useState(0);
  const [sign, setSign] = useState('');

  const calculation = (operator) => {
    if (sign === '') {
      setFirstNumber(parseInt(firstNumber.toString() + operator.toString()));
      setVisor(parseInt(firstNumber.toString() + operator.toString()));
    }

    if (
      (operator === '/' || operator === 'x' || operator === '-' || operator === '+') &&
      secondNumber === 0
    ) {
      setVisor(firstNumber.toString() + operator);
      setSign(operator);
    }

    if (sign !== '') {
      setSecondNumber(parseInt(secondNumber.toString() + operator.toString()));
      const sNumber = parseInt(secondNumber.toString() + operator.toString());
      setVisor(firstNumber + sign + sNumber);
    }

    if (operator === '=') {
      let result = 0;
      if (sign === '+') {
        result = firstNumber + secondNumber;
      } else if (sign === '-') {
        result = firstNumber - secondNumber;
      } else if (sign === 'x') {
        result = firstNumber * secondNumber;
      } else if (sign === '/') {
        result = firstNumber / secondNumber;
      }
      setVisor(result);
      setFirstNumber(result);
      setSign('');
      setSecondNumber(0);
    }

    if (operator === 'c') {
      setVisor(0);
      setFirstNumber(0);
      setSign('');
      setSecondNumber(0);
    }
  };

  return (
    <div>
      <Visor visor={visor} />
      <ButtonsNumber calculation={calculation} />
    </div>
  );
}
