import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css'
import Router from "./components/Router";
import AuthProvider from "./providers/AuthProvider";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <AuthProvider>
          <Router />
      </AuthProvider>
      </QueryClientProvider>
  </React.StrictMode>
);

