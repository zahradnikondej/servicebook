import { Button } from "../components/Button";
import { Image } from "../components/Image";

function Home() {
  return (
    <div>
      <Button to="/new-record" text="New record" />
      <Image />
    </div>
  );
}

export { Home };
