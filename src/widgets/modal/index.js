import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

import styles from "../modal/modal.module.scss";

function Modal({ children, title, onClose }) {
  const root = document.getElementById("modal-root");

  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.icon}>
          <AiOutlineClose onClick={onClose} />
        </div>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    </div>,
    root
  );
}

export { Modal };
