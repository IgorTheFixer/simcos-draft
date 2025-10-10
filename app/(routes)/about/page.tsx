'use client'

import Container from "@/components/ui/Container";

import Footer from '@/components/Footer';
import Header from "@/components/Header";
import { inter } from "@/fonts";

const AboutPage = () => {

  return (
    <Container>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className={`flex-1 min-w-full px-8 md:px-40 lg:px-40 md:text-simcosOrange text-5xl font-bold m-8 mb-4 ${inter.className}`}>
          ABOUT
        </div>
        <Footer />
      </div>
    </Container>
  )
};

export default AboutPage;