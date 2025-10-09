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
        <Header />
        {/* Content overlay */}
        <div className={`flex-1 min-w-full px-4 sm:px-8 md:px-20 lg:px-40 text-3xl sm:text-4xl md:text-5xl font-bold m-4 sm:m-6 md:m-8 mb-4 ${inter.className}`}>
          <div className="border-b-[1px] border-simcosOrange w-fit flex gap-2 items-start text-simcosOrange">
            MENU
            <SimcosButton variant={"secondary"} className="bg-simcosOrange text-white font-medium text-[6px] sm:text-[8px] w-20 sm:w-24 whitespace-normal text-start leading-tight rounded-tr-[48.5px]">Todays Offer<br/>FREE BOX OF FRIES<br/>On all orders above $150</SimcosButton>
          </div>
          
          {/* Menu Cards */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full mt-4 sm:mt-6">
            
            {/* Greek Sandwiches - Full width card */}
            <Card className="bg-[#F7F7F7] rounded-tl-[60px] sm:rounded-tl-[85.5px] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none w-full"> 
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="relative w-full h-48 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <Image 
                      src={"/Gyro_Menu Categories_Gyro v2.jpg"}
                      alt="Greek sandwiches"
                      fill
                      className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                    />
                  </div>
                  <div className="flex flex-col p-4 sm:p-6 lg:p-8 text-center md:text-left w-full md:flex-1">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Greek Sandwiches</p>
                    <Link href="/menu#greek-sandwiches">
                      <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full sm:w-auto">View all dishes</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dinners and Chicken Dinners - Two column layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Card className="bg-[#D9D9D9] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none flex-1"> 
                <CardContent className="p-0">
                  <div className="flex flex-col-reverse items-center">
                    <div className="relative w-full aspect-square">
                      <Image 
                        src={"/Dinners_Menu Categories_Slouvaki.jpg"}
                        alt="Dinner dishes"
                        fill
                        className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Dinners</p>
                      <Link href="/menu#dinners">
                        <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none flex-1"> 
                <CardContent className="p-0">
                  <div className="flex flex-col-reverse items-center">
                    <div className="relative w-full aspect-square">
                      <Image 
                        src={"/Chicken Dinners_Menu Categories_Chicken Wing Dinner.jpg"}
                        alt="Chicken dinner dishes"
                        fill
                        className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Chicken Dinners</p>
                      <Link href="/menu#chicken-dinners">
                        <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Three column layout - responsive to stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Card className="bg-[#D9D9D9] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none flex-1"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
                      <Image 
                        src={"/new-soup.png"}
                        alt="Soup dishes"
                        fill
                        className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Soups</p>
                      <Link href="/menu#soups">
                        <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none flex-1"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
                      <Image 
                        src={"/new-wrap.png"}
                        alt="Wrap dishes"
                        fill
                        className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Wraps</p>
                      <Link href="/menu#wraps">
                        <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none flex-1"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
                      <Image 
                        src={"/Pasta_Menu Categories_Chicken Broccoli Alfredo.jpg"}
                        alt="Spaghetti dishes"
                        fill
                        className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Spaghetti</p>
                      <Link href="/menu#spaghetti">
                        <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Featured - Full width card */}
            <Card className="bg-[#F7F7F7] rounded-tl-[60px] sm:rounded-tl-[85.5px] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none w-full"> 
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="relative w-full h-48 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <Image 
                      src={"/Featuring_Menu Categories_Cheese Burger.jpg"}
                      alt="Featured dishes"
                      fill
                      className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                    />
                  </div>
                  <div className="flex flex-col p-4 sm:p-6 lg:p-8 text-center md:text-left w-full md:flex-1">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Featured</p>
                    <Link href="/menu#featured">
                      <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full sm:w-auto">View all dishes</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pizza and Calzones - Two column layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Card className="bg-[#D9D9D9] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none flex-1"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square">
                      <Image 
                        src={"/Pizza_Menu Categpries_Cheese Pizza.jpg"}
                        alt="Pizza dishes"
                        fill
                        className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Pizza</p>
                      <Link href="/menu#pizza">
                        <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none flex-1"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square">
                      <Image 
                        src={"/Calzones_Menu Categories_Steak and Cheese Calzone.jpg"}
                        alt="Calzone dishes"
                        fill
                        className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Calzones</p>
                      <Link href="/menu#calzones">
                        <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Salads - Full width card */}
            <Card className="bg-[#F7F7F7] rounded-tl-[60px] sm:rounded-tl-[85.5px] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none w-full"> 
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="relative w-full h-48 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <Image 
                      src={"/Salads_Menu Categories_Chicken Ceasar.jpg"}
                      alt="Salad dishes"
                      fill
                      className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                    />
                  </div>
                  <div className="flex flex-col p-4 sm:p-6 lg:p-8 text-center md:text-left w-full md:flex-1">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Salads</p>
                    <Link href="/menu#salads">
                      <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full sm:w-auto">View all dishes</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subs - Full width card */}
            <Card className="bg-[#F7F7F7] rounded-tl-[60px] sm:rounded-tl-[85.5px] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none w-full"> 
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row-reverse items-center">
                  <div className="relative w-full h-48 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <Image 
                      src={"/new-sub.png"}
                      alt="Sub sandwiches"
                      fill
                      className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                    />
                  </div>
                  <div className="flex flex-col p-4 sm:p-6 lg:p-8 text-center md:text-left w-full md:flex-1">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Subs</p>
                    <Link href="/menu#subs">
                      <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full sm:w-auto">View all dishes</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fresh Seafood and Boxes - Two column layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Card className="bg-[#D9D9D9] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none flex-1"> 
                <CardContent className="p-0">
                  <div className="flex flex-col-reverse items-center">
                    <div className="relative w-full aspect-square">
                      <Image 
                        src={"/new-seafood.png"}
                        alt="Fresh seafood dishes"
                        fill
                        className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Fresh Seafood</p>
                      <Link href="/menu#fresh-seafood">
                        <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none flex-1"> 
                <CardContent className="p-0">
                  <div className="flex flex-col-reverse items-center">
                    <div className="relative w-full aspect-square">
                      <Image 
                        src={"/Boxes_Menu Categories_Cheese Fries.jpg"}
                        alt="Box meals"
                        fill
                        className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Boxes</p>
                      <Link href="/menu#boxes">
                        <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Three column layout - responsive to stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Card className="bg-[#D9D9D9] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none flex-1"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
                      <Image 
                        src={"/new-slice.png"}
                        alt="Pizza slices"
                        fill
                        className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Slice of Pizza</p>
                      <Link href="/menu#slice-of-pizza">
                        <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none flex-1"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
                      <Image 
                        src={"/Desserts_Menu Categories_Sundae.jpg"}
                        alt="Dessert dishes"
                        fill
                        className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Desserts</p>
                      <Link href="/menu#desserts">
                        <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full">View all dishes</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#F4EFEF] rounded-bl-[19px] rounded-br-[40px] sm:rounded-br-[60px] border-none flex-1"> 
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full aspect-square sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
                      <Image 
                        src={"/Drinks_Menu Categories_Joe Tea.jpg"}
                        alt="Beverages"
                        fill
                        className="object-cover rounded-br-[40px] sm:rounded-br-[60px]"
                      />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4 md:p-6 lg:p-8 text-center w-full">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-simcosOrange mb-3 sm:mb-4">Beverages</p>
                      <Link href="/menu#beverages">
                        <Button className="whitespace-nowrap text-xs sm:text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 w-full">View all dishes</Button>
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