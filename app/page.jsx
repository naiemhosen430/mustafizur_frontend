import Hero from "./components/Home/Hero";
import NewInStore from "./components/Home/NewInStore";
import Courses from "./components/Home/Courses";
import Banner from "./components/ReUseableComponents/Banner";
import NewsAndEvent from "./components/Home/NewsAndEvent";
import BrandSection from "./components/Home/BrandSection";
import CounterSection from "./components/Home/CounterSection";
import Banner2 from "./components/Home/Banner2";
import Slider from "./components/ReUseableComponents/Slider";

export default function Home() {
  return (
    <>
      <Hero />
      <NewInStore />
      <Courses />
      <Banner />
      <CounterSection />
      <Banner2 />
      <Slider item={1} />
      <NewsAndEvent />
      <BrandSection />
    </>
  );
}
