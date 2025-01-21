import { BrowserRouter } from "react-router";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRoutes></AppRoutes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
