"use Client"

import Image from "next/image"
import Link from "next/link";
import SubNav from "./SubNav";

const Header = () => {
  
  return ( 
    <nav className="
      flex 
      items-center 
      relative 
      min-h-min 
      justify-center 
      w-full 
      bg-white
      border-simcosOrange 
      border-solid 
      border-b-2
      px-8 
      md:px-40 
      lg:px-40
      ">
      <Link href="/">
      <div className="relative h-full w-full py-2">
        <Image
          alt="An image of Simco's logo"
          src="/simcos-logo.png"
          height={200}
          width={200}
          style={{
            // position: 'absolute',
            objectFit: 'cover'
          }}
        />
      </div>
      </Link>
      <SubNav />
      {/* Order Button */}
      <div>

      </div>
    </nav>
   );
}
 
export default Header;

