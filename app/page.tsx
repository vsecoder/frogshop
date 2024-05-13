import Header from "../components/header";
import Hero from "../components/hero";
import Products from "../components/products";

export default function Home() {
  return (
    <div className="bg-[#FAF9F9]">
      <Header />
      <Hero />
      <Products />
    </div>
  );
}
