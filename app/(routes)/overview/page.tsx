'use client'
import Container from "@/components/ui/Container";

import Footer from '@/components/Footer';
import Header from "@/components/Header";
import { inter } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Button from "@/components/ui/Button";
import { SimcosButton } from "@/components/ui/SimcosButton";


const HomePage = () => {

  return (
    <Container>
      <div className="flex flex-col min-h-screen max-w-full relative overflow-x-hidden">
        {/* Background Image */}
        {/* <div 
          className="absolute w-[500px] h-[375px] md:w-[800px] md:h-[600px] lg:w-[1200px] lg:h-[900px] -z-10"
          style={{
            top: '-191px',
            right: '-261px',
            backgroundImage: 'url(/menu-background.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'top right',
            backgroundRepeat: 'no-repeat'
          }}
        /> */}
        <Header />
        {/* Content overlay */}
        <div className={`flex-1 min-w-full px-8 md:px-40 lg:px-40 md:text-simcosOrange text-5xl font-bold m-8 mb-4 ${inter.className}`}>
          <div className="border-b-[1px] border-simcosOrange w-fit flex gap-2">
            MENU
            <SimcosButton variant={"secondary"} className="bg-simcosOrange text-white font-medium text-[6px] w-24 whitespace-normal text-start leading-tight rounded-tr-[48.5px]">Todays Offer<br/>FREE BOX OF FRIES<br/>On all orders above $150</SimcosButton>
          </div>
          {/* Menu Cards */}
          <div className="flex flex-col gap-4 w-fit">
            <Card className="bg-[#F7F7F7] rounded-tl-[85.5px] rounded-bl-[19px] rounded-br-[60px] border-none w-full"> 
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl">
                    <Image 
                      src={"/new-greek.png"}
                      alt="two individuals having a conversation"
                      fill
                      className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                    />
                  </div>
                  <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                    <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4">Greek Sandwiches</p>
                    <Link href="/menu#greek-sandwiches">
                      <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 ">
              <Card className="bg-[#D9D9D9]  rounded-bl-[19px] rounded-br-[60px] border-none basis-1/2"> 
                <CardContent className="p-0">
                  <div className="flex flex-col-reverse items-center">
                    <div className="relative w-full aspect-square rounded-xl">
                      <Image 
                        src={"/new-dinner.png"}
                        alt="two individuals having a conversation"
                        fill
                        className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                      <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4 text-center">Dinners</p>
                      <Link href="/menu#dinners">
                        <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[60px] border-none basis-1/2"> 
                <CardContent className="p-0">
                  <div className="flex flex-col-reverse items-center">
                    <div className="relative w-full aspect-square rounded-xl">
                      <Image 
                        src={"/new-chicken.png"}
                        alt="two individuals having a conversation"
                        fill
                        className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                      <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4 text-center">Chicken Dinners</p>
                      <Link href="/menu#chicken-dinners">
                        <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 ">
              <Card className="bg-[#D9D9D9]  rounded-bl-[19px] rounded-br-[60px] border-none basis-1/3"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl">
                      <Image 
                        src={"/new-soup.png"}
                        alt="two individuals having a conversation"
                        fill
                        className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                      <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4 text-center">Soups</p>
                      <Link href="/menu#soups">
                        <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[60px] border-none basis-1/3"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl">
                      <Image 
                        src={"/new-wrap.png"}
                        alt="two individuals having a conversation"
                        fill
                        className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                      <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4 text-center">Wraps</p>
                      <Link href="/menu#wraps">
                        <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[60px] border-none basis-1/"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl">
                      <Image 
                        src={"/new-spaghetti.png"}
                        alt="two individuals having a conversation"
                        fill
                        className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                      <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4 text-center">Spaghetti</p>
                      <Link href="/menu#spaghetti">
                        <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex">
            <Card className="bg-[#F7F7F7] rounded-tl-[85.5px] rounded-bl-[19px] rounded-br-[60px] border-none w-full"> 
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl">
                    <Image 
                      src={"/new-greek.png"}
                      alt="two individuals having a conversation"
                      fill
                      className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                    />
                  </div>
                  <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                    <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4">Featured</p>
                    <Link href="/menu#featured">
                      <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>

            <div className="flex gap-4 ">
              <Card className="bg-[#D9D9D9]  rounded-bl-[19px] rounded-br-[60px] border-none basis-1/2"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square rounded-xl">
                      <Image 
                        src={"/new-pizza.png"}
                        alt="two individuals having a conversation"
                        fill
                        className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                      <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4 text-center">Pizza</p>
                      <Link href="/menu#pizza">
                        <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[60px] border-none basis-1/2"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square rounded-xl">
                      <Image 
                        src={"/new-calzone.png"}
                        alt="two individuals having a conversation"
                        fill
                        className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                      <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4 text-center">Calzones</p>
                      <Link href="/menu#calzones">
                        <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex">
            <Card className="bg-[#F7F7F7] rounded-tl-[85.5px] rounded-bl-[19px] rounded-br-[60px] border-none w-full"> 
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl">
                    <Image 
                      src={"/new-salad.png"}
                      alt="two individuals having a conversation"
                      fill
                      className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                    />
                  </div>
                  <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                    <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4">Salads</p>
                    <Link href="/menu#salads">
                      <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>

            <div className="flex">
            <Card className="bg-[#F7F7F7] rounded-tl-[85.5px] rounded-bl-[19px] rounded-br-[60px] border-none w-full"> 
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl">
                    <Image 
                      src={"/new-sub.png"}
                      alt="two individuals having a conversation"
                      fill
                      className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                    />
                  </div>
                  <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                    <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4">Subs</p>
                    <Link href="/menu#subs">
                      <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>

            <div className="flex gap-4 ">
              <Card className="bg-[#D9D9D9]  rounded-bl-[19px] rounded-br-[60px] border-none basis-1/2"> 
                <CardContent className="p-0">
                  <div className="flex flex-col-reverse items-center">
                    <div className="relative w-full aspect-square rounded-xl">
                      <Image 
                        src={"/new-seafood.png"}
                        alt="two individuals having a conversation"
                        fill
                        className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                      <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4 text-center">Fresh Seafood</p>
                      <Link href="/menu#fresh-seafood">
                        <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[60px] border-none basis-1/2"> 
                <CardContent className="p-0">
                  <div className="flex flex-col-reverse items-center">
                    <div className="relative w-full aspect-square rounded-xl">
                      <Image 
                        src={"/new-box.png"}
                        alt="two individuals having a conversation"
                        fill
                        className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                      <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4 text-center">Boxes</p>
                      <Link href="/menu#boxes">
                        <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 ">
              <Card className="bg-[#D9D9D9]  rounded-bl-[19px] rounded-br-[60px] border-none basis-1/3"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl">
                      <Image 
                        src={"/new-slice.png"}
                        alt="two individuals having a conversation"
                        fill
                        className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                      <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4 text-center">Slice of Pizza</p>
                      <Link href="/menu#slice-of-pizza">
                        <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[60px] border-none basis-1/3"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl">
                      <Image 
                        src={"/new-dessert.png"}
                        alt="two individuals having a conversation"
                        fill
                        className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                      <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4 text-center">Desserts</p>
                      <Link href="/menu#desserts">
                        <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[60px] border-none basis-1/"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl">
                      <Image 
                        src={"/new-drink.png"}
                        alt="two individuals having a conversation"
                        fill
                        className="aspect-square object-cover rounded-xl rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-4 md:p-6 lg:p-8 text-center md:text-left">
                      <p className="text-base md:text-lg lg:text-xl text-simcosOrange mb-4 text-center">Beverages</p>
                      <Link href="/menu#beverages">
                        <Button className="whitespace-nowrap text-sm md:text-base px-4 py-2 md:px-6 md:py-3">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  )
};

export default HomePage;