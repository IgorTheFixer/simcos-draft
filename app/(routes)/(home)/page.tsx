'use client'
import Container from "@/components/ui/Container";

import Footer from '@/components/Footer';
import Header from "@/components/Header";
import { inter } from "@/fonts";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import useDeliveryModal from "@/hooks/useDeliveryModal";


const HomePage = () => {
  const router = useRouter();

  const modal = useDeliveryModal();

  const onDelivery = () => {
    console.log("here")
    event.stopPropagation()
    modal.onOpen()
  }
  return (
    <Container>
      <div className="flex flex-col min-h-screen max-w-full relative overflow-x-hidden">
        {/* Background Image */}
        <div 
          className="absolute w-[500px] h-[375px] md:w-[800px] md:h-[600px] lg:w-[1200px] lg:h-[900px] -z-10"
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
        <div className={`flex-1 min-w-full px-8 md:px-40 lg:px-40 text-simcosOrange text-5xl font-bold m-8 mb-4 ${inter.className}`}>
          HUNGRY?
          <p className={`${inter.className} text-base font-medium text-black`}>Welcome to Simco’s Home of the World's Largest Old Tyme Franks</p>
          <p className={`${inter.className} text-base font-medium text-black`}>Serving iconic food & drink for lunch, dinner, and late-night cravings to the Boston area since 1935.</p>
          {/* <p className={`${inter.className} text-base font-medium text-black`}>to the Boston area since 1935.</p> */}
          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button onClick={() => router.push('/overview')} className="bg-white shadow-lg shadow-gray-500 flex flex-col items-center text-left w-32 md:w-40 lg:w-48  rounded-[57px] rounded-br-[142px]">
              <Image 
                src={"/location.png"}
                alt="an icon of a storefront"
                width={80}
                height={80}
                className="aspect-square object-cover rounded-xl"
                />
              <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4">Curbside<br/>pickup</p>
            </Button>

            <Button onClick={onDelivery} className="bg-white shadow-lg shadow-gray-500 flex flex-col items-center text-left w-32 md:w-40 lg:w-48  rounded-[57px] rounded-br-[142px]">
              <Image 
                src={"/pickup-car.png"}
                alt="an icon of a delivery truck"
                width={80}
                height={80}
                className="aspect-square object-cover rounded-xl"
                />
              <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4">Delivery</p>
            </Button>

            <Button onClick={() => router.push('/overview')} className="bg-white shadow-lg shadow-gray-500 flex flex-col items-center text-left w-32 md:w-40 lg:w-48  rounded-[57px] rounded-br-[142px]">
              <Image 
                src={"/burger.png"}
                alt="an icon of a burger"
                width={80}
                height={80}
                className="aspect-square object-cover rounded-xl"
                />
              <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4">Menu</p>
            </Button>
          </div>
          <Card className="bg-[#D9D9D9] rounded-tl-[167px] rounded-br-[113px]"> 
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl">
                  <Image 
                    src={"/simcos hero food.jpg"}
                    alt="two individuals having a conversation"
                    fill
                    className="aspect-square object-cover rounded-xl rounded-br-[113px]"
                  />
                </div>
                <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                  <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4">We would like you to be part of our team!</p>
                  <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">Contact us here</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </Container>
  )
};

export default HomePage;