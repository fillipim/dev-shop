import Cart from "@/components/Cart";
import Header from "@/components/Header";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Cart />
    </div>
  );
}
