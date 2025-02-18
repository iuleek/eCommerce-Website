import "@/styles/globals.css";
import { CartProvider } from "@/components/context/cartContext";
import { FiltersProvider } from '../components/Context/FiltersContext'

import React  from 'react';
export default function App({ Component, pageProps }) {
  return (
    <FiltersProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </FiltersProvider>
  );
}
