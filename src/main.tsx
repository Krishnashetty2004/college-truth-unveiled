import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PostHogProvider } from "@posthog/react";
import App from "./App.tsx";
import "./index.css";

const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY || "phc_kx94CIiUj1RYzDOEe03QeZVYi9OuD0efujEX6jeCkzK";
const POSTHOG_HOST = import.meta.env.VITE_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

const options = {
  api_host: POSTHOG_HOST,
  capture_pageview: true,
  capture_pageleave: true,
  autocapture: true,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider apiKey={POSTHOG_KEY} options={options}>
      <App />
    </PostHogProvider>
  </StrictMode>
);
