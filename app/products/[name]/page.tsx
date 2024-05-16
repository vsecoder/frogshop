"use client";

import Header from "@/components/header";
import Product from "@/components/product";
import Reviews from '@/components/reviews';
import Team from "@/components/team";
import Summary from "@/components/summary";
import Write from "@/components/write";

import { usePathname } from 'next/navigation';
import { SignedIn } from '@clerk/nextjs';

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
      <Summary />
      <Reviews id={name} />
      <SignedIn>
        <Write />
      </SignedIn>
      <Team />
    </div>
  );
}
