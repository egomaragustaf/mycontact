import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Home from "./routes/home";
import "./index.css";
import ContactDetail from "./routes/contact-detail";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact/:id",
    element: <ContactDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
