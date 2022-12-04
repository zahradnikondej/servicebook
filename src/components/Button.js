import { useNavigate } from "react-router-dom";

const Button = ({ to, onClick = () => {}, text, type }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    to && navigate(to, { replace: true });

    onClick();
  };

  return (
    <button className="btn" onClick={handleClick} type={type}>
      {text}
    </button>
  );
};

export { Button };
