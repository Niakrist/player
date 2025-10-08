import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { HomePage } from "@/pages";
import { MainLayout } from "./layout";
import { NuqsAdapter } from "nuqs/adapters/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NuqsAdapter>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </NuqsAdapter>
  </StrictMode>,
);
