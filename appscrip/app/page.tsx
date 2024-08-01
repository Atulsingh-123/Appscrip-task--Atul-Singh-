"use client";

import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import ProductsCards from "./components/ProductsCards";
import { SidebarProvider } from "./context/Context";
import FilterSidebar from "./components/FilterSidebar";

export default function Home() {

  return (
      <SidebarProvider>
        <Navbar />
        <FrontPage />
        <Filter />
        {/* <FilterSidebar/> */}
        <ProductsCards />
        <Footer />
      </SidebarProvider>
  );
}
