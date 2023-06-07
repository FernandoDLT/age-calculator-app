import './Divider.css';

function Divider() {
  return (
    <div className="divider">
      <div className="divider-line"></div>
      <div className="arrow-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="44"
          viewBox="0 0 46 44"
        >
          <g fill="none" stroke="#FFF" strokeWidth="3">
            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export { Divider };
