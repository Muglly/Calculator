import React from 'react';

export function ButtonsNumber() {
  const numbers = [{ id: [] }, { number: [] }];

  for (let i = 0; i <= 9; i++) {
    numbers[0].id.push(i);
    numbers[1].number.push(i);
  }

  return (
    <div className="box-container">
      {numbers.map((nbr) => {
        return (
          <div>
            <span key={nbr.id}>{nbr.number}</span>
          </div>
        );
      })}
    </div>
  );
}
