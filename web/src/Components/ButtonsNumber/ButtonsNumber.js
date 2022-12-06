import './ButtonsNumber.css';

export function ButtonsNumber({ calculation }) {
  const numbers = [];

  for (let i = 0; i <= 9; i++) {
    numbers.push(i);
  }

  numbers.reverse();

  return (
    <div className="all-btn">
      <div className="btn-top-container">
        <button className="btn btn-top" onClick={() => calculation('c')}>
          <span className="btn-text text-c">C</span>
        </button>

        <button className="btn btn-top" onClick={() => calculation('=')}>
          <span className="btn-text text-r">=</span>
        </button>
      </div>

      <div className="sign-num-container">
        <div className="num-container">
          {numbers.map((num) => {
            return (
              <button className="btn" key={num.toString()} onClick={() => calculation(num)}>
                <span className="btn-text">{num}</span>
              </button>
            );
          })}
        </div>

        <div className="sign-container">
          <button className="btn" onClick={() => calculation('/')}>
            <span className="btn-text  text-color">/</span>
          </button>

          <button className="btn" onClick={() => calculation('x')}>
            <span className="btn-text text-color">x</span>
          </button>

          <button className="btn" onClick={() => calculation('-')}>
            <span className="btn-text text-color">-</span>
          </button>

          <button className="btn" onClick={() => calculation('+')}>
            <span className="btn-text text-color">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}
