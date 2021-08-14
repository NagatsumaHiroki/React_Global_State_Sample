import React from "react";
import { UserPrivider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <UserPrivider>
      <Router />
    </UserPrivider>
  );
}
