'use client'
import Container from "@/components/ui/Container";

import Footer from '@/components/Footer';
import Header from "@/components/Header";
import { inter } from "@/fonts";


const HomePage = () => {

  return (
    <Container>
      <div className="flex flex-col min-h-screen max-w-full relative overflow-x-hidden">
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
        <div className={`flex-1 min-w-full px-8 md:px-40 lg:px-40 md:text-simcosOrange text-5xl font-bold m-8 mb-4 ${inter.className}`}>
          HUNGRY?
        </div>
        <Footer />
      </div>
    </Container>
  )
};

export default HomePage;