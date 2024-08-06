import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { SidebarProvider } from "./components/context/sidebarContext";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Product from "./components/Product";
import Layout from "./components/Layout";
import Provider from "./services/Provider";

import Productdetail from "./components/Productdetail";

import Cart from "./components/cart";
import CategoryProduct from "./components/Catogoryproduct";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route path="/productdetail/:id" element={<Productdetail />} />
      <Route path="" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:categorySlug" element={<CategoryProduct/>} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>,
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
