import { useNavigate } from "react-router-dom";

const Button = ({ to, text }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    to && navigate(to, { replace: true });
  };
  return (
    <button className="btn" onClick={handleClick}>
      {text}
    </button>
  );
};

export { Button };
