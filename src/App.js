import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p> Haz clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz clic</button>
    </div>
  );
}
