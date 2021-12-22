import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

export default function Clicker() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      Times clicked : {counter}
      <div> <Button variant="primary" size="lg" onClick={() => setCounter(counter + 1)}>Count</Button></div>
      <div> <Button variant="danger" size="lg" onClick={() => setCounter(0)}>Reset</Button></div>


    </div>
  );
}