import './Result.css';

function Result({ days, months, years }) {
  return (
    <div className="result">
      <div>
        <span className="result--number">{years ? years : '--'}</span>
        <span className="result--time">years</span>
      </div>
      <div>
        <span className="result--number">{months ? months : '--'}</span>
        <span className="result--time">months</span>
      </div>
      <div>
        <span className="result--number">{days ? days : '--'}</span>
        <span className="result--time">days</span>
      </div>
    </div>
  );
}

export { Result };
