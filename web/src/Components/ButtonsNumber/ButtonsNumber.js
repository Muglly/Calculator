import './ButtonsNumber.css';

export function ButtonsNumber() {
  const numbers = [];

  for (let i = 0; i <= 9; i++) {
    numbers.push(i);
  }

  return (
    <div className="all-btn">
      <div className="box-container">
        {numbers.map((num) => {
          return (
            <div className="btn" key={num.toString()}>
              <span className="btn-text">{num}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
