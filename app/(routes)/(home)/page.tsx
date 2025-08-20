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
      <div className="flex flex-col max-w-full relative">
        {/* Background Image */}
        <div 
          className="absolute top-0 right-0 w-[1200px] h-[900px] z-0"
          style={{
            backgroundImage: 'url(/simcos-homepage-combined.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'top right',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Content overlay */}
        <div className="relative z-10">
          <Header />
          <div className="flex pt-24 md:py-24 min-h-screen max-h-full min-w-full flex-col md:flex-row">
            <div className="flex flex-col items-stretch basis-1/2 max-h-full max-w-full relative">
              <div className="relative flex flex-col items-center justify-center min-h-full max-h-full">
                <div className="flex flex-col items-center relative mx-20 text-center basis-1/2">
                  <h1 className={`hidden md:text-white text-3xl m-8 mb-4 ${bevan.className} md:block`}>
                    HUNGRY?
                  </h1>
                  <p className={`hidden md:text-white text-xl mb-4 ${robotoCondensed.className} md:block`}>
                    {`Welcome to Simco's`}
                  </p>
                  <p className={`hidden md:text-white text-xl mb-4 ${robotoCondensed.className} md:block`}>
                    {`Welcome to Simco's Home of the World's Largest Old Tyme Franks Serving iconic food & drink for lunch, dinner, and late-night cravings to the Boston area since 1935.`}
                  </p>
                  <div className="flex flex-col space-y-2 justify-center items-center">
                    <Link href="/menu">
                      <SimcosButton
                        variant={"simcos"}
                        size={'nav'}
                        className={bevan.className}
                      >
                        CURBSIDE PICKUP
                      </SimcosButton>
                    </Link>
                    <SimcosButton
                        variant={"simcos"}
                        size={'nav'}
                        className={bevan.className}
                        onClick={onDelivery}
                      >
                        DELIVERY
                    </SimcosButton>
                    <Link href="/menu">
                        <SimcosButton
                          variant={"simcos"}
                          size={'nav'}
                          className={bevan.className}
                        >
                          MENU
                        </SimcosButton>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  )
};

export default HomePage;