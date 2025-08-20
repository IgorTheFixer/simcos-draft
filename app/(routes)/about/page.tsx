'use client'

import Container from "@/components/ui/Container";

import Footer from '@/components/Footer';
import Header from "@/components/Header";

// export const revalidate = 0;

const AboutPage = () => {

  return (
    <Container>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1 min-w-full px-8 md:px-40 lg:px-40">
          ABOUT
        </div>
        <Footer />
      </div>
    </Container>
  )
};

export default AboutPage;