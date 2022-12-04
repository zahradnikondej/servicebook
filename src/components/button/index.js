import { useNavigate } from "react-router-dom";

import styles from "../button/button.module.scss";

const Button = ({
  to,
  onClick = () => {},
  text,
  type,
  icon: Icon,
  color = "white",
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    to && navigate(to, { replace: true });

    onClick();
  };

  return (
    <button
      className={styles.button}
      onClick={handleClick}
      type={type}
      color={color}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export { Button };
