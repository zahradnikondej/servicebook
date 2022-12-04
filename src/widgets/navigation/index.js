import { Button } from "../../components/button";

import styles from "../navigation/navigation.module.scss";

function Navigation({ items }) {
  return (
    <nav className={styles.navigation}>
      {items.map((item) => (
        <Button to={item.to} text={item.text} key={item.id} icon={item.icon} />
      ))}
    </nav>
  );
}

export { Navigation };
