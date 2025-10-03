import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { HomePage } from "@/pages";
import { MainLayout } from "./layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainLayout>
      <HomePage />
    </MainLayout>
  </StrictMode>
);
