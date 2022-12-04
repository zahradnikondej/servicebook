import { useState } from "react";

import { Button } from "../components/button";
import { Modal } from "../widgets/modal";

function Home() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      This is home!
      <Button
        text="Add New Record"
        onClick={() => setModal(true)}
        color="green"
      />
      {modal && <Modal onClose={() => setModal(false)} />}
    </div>
  );
}

export { Home };
