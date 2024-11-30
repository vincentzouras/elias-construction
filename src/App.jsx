import { useState } from "react";
import eliasLogo from "/logo-navbar.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={eliasLogo} alt="Elias Construction" />

      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}

export default App;
