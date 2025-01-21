import "@mantine/core/styles.css";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { Router } from "./Router.js";
import { theme } from "./utils/theme.js";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Router />
      </MantineProvider>
    </QueryClientProvider>
  );
}
