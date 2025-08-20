'use client'

import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/ProductList";
import Billboard from "@/components/ui/Billboard";
import Container from "@/components/ui/Container";

import Image from "next/image";
import { HotDog } from "./components/hotdog";
import { bevan, robotoCondensed } from "@/fonts";
import { SimcosButton } from "@/components/ui/SimcosButton";
import Navbar  from "@/components/Navbar"
import Link from "next/link";
import useDeliveryModal from "@/hooks/useDeliveryModal";

import Footer from '@/components/Footer';
import Header from "@/components/Header";

// export const revalidate = 0;

const HomePage = () => {
  const modal = useDeliveryModal();

  const onDelivery = (event) => {
    console.log("here")
    event.stopPropagation();

    modal.onOpen();
  };

  return (
    <Container>
      <div className="flex flex-col max-w-full relative overflow-x-hidden">
        {/* Background Image */}
        <div 
          className="absolute w-[500px] h-[375px] md:w-[800px] md:h-[600px] lg:w-[1200px] lg:h-[900px] z-0"
          style={{
            top: '-191px',
            right: '-261px',
            backgroundImage: 'url(/simcos-homepage-combined.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'top right',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <Header />
        {/* Content overlay */}
      </div>
      <Footer />
    </Container>
  )
};

export default HomePage;