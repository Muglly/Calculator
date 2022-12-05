import './ButtonsNumber.css';

export function ButtonsNumber() {
  const numbers = [];

  for (let i = 0; i <= 9; i++) {
    numbers.push(i);
  }

  numbers.reverse();

  return (
    <div className="all-btn">
      <div className="btn-top-container">
        <button className="btn btn-top">
          <span className="btn-text text-c">C</span>
        </button>

        <button className="btn btn-top">
          <span className="btn-text text-r">=</span>
        </button>
      </div>

      <div className="sign-num-container">
        <div className="num-container">
          {numbers.map((num) => {
            return (
              <button className="btn" key={num.toString()}>
                <span className="btn-text">{num}</span>
              </button>
            );
          })}
        </div>

        <div className="sign-container">
          <button className="btn">
            <span className="btn-text  text-color">+</span>
          </button>

          <button className="btn">
            <span className="btn-text text-color">-</span>
          </button>

          <button className="btn">
            <span className="btn-text text-color">/</span>
          </button>

          <button className="btn">
            <span className="btn-text text-color">x</span>
          </button>
        </div>
      </div>
    </div>
  );
}
