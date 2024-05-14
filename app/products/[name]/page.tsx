"use client";

import Header from "../../../components/header";
import Product from "../../../components/product";
import Team from "../../../components/team";

import { usePathname } from 'next/navigation'

export default function Home() {
  const name = usePathname().split('/').pop();

  if (!name) {
    return <div>Product not found</div>;
  }

  const decodedName = decodeURIComponent(name);

  return (
    <div className="bg-[#FAF9F9]">
      <Header />
      <Product name={decodedName} />
      <Team />
    </div>
  );
}
