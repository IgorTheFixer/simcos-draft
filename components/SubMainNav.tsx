import Link from "next/link"
// import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";
import { SimcosButton } from "@/components/ui/SimcosButton";
import { bevan, robotoCondensed } from "@/fonts";


const SubMainNav = () => {

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 text-simcosOrange">
      <Link href="/menu">Menu</Link>
      <Link href="/stories">Stories</Link>
      <Link href="/about">About</Link>
    </nav>
  )
};

export default SubMainNav;