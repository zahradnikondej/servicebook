import { useNavigate } from "react-router-dom";

const Button = ({ to, text, type }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    to && navigate(to, { replace: true });
  };
  return (
    <button className="btn" onClick={handleClick} type={type}>
      {text}
    </button>
  );
};

export { Button };
