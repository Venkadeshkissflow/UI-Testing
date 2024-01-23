import React, { useState } from "react";

import "./mycomponent.styles.css";

export function MyComponent() {
  const [status, setStatus] = useState("");
  return (
    <div className="form">
      <input data-testid="email" type="email" />
      <input data-testid="password" type="password" />
      <button onClick={() => setStatus("Logged in")}>Submit</button>
      <p>{status}</p>
    </div>
  );
}
