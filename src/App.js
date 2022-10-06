
import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Food from "./components/Food";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OrderDetails from "./components/OrderDetails";

function App() {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
