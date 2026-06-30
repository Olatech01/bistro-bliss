import About from "@/components/About";
import Articles from "@/components/Articles";
import Customers from "@/components/Customers";
import Fastest from "@/components/Fastest";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Offer from "@/components/Offer";



export default function Home() {
  return (
    <div className="">
      <Hero />
      <Menu />
      <About />
      <Offer />
      <Fastest />
      <Customers />
      <Articles />
    </div>
  );
}
