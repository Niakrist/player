import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { HomePage } from "@/pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
