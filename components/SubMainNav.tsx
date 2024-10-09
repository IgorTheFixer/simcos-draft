import Link from "next/link"
// import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";
import { SimcosButton } from "@/components/ui/SimcosButton";
import { bevan, robotoCondensed } from "@/fonts";

// interface SubNavProps {
//   data: Category[];
// }

const SubMainNav = () => {
  // const pathname = usePathname();

  // const routes = data.map((route) => ({
  //   href: `/category/${route.id}`,
  //   label: route.name,
  //   active: pathname === `/category/${route.id}`,
  // }));

  return (
    <nav
      className="mx-6 flex items-center space-x-4 lg:space-x-6"
    >
      {/* {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-[#EBD6B7]',
            route.active ? 'text-black' : 'text-white'
          )}
        >
          {route.label}
      </Link>
      ))} */}
      <Link
          // key={route.href}
          
          href="/menu"
          // className={cn(
          //   'text-sm font-medium transition-colors hover:text-[#EBD6B7] text-black'
          // )}
        >
          <SimcosButton
            variant={"nav"}
            size={'sm'}
            className={bevan.className}
          >
            MENU
          </SimcosButton>
      </Link>
      <Link
          // key={route.href}
          href="/login"
          // className={cn(
          //   'text-sm font-medium transition-colors hover:text-[#EBD6B7] text-black'
          // )}
        >
          <SimcosButton
            variant={"nav"}
            size={'sm'}
            className={bevan.className}
          >
            LOGIN
          </SimcosButton>
      </Link>
      <Link
          // key={route.href}
          href="/signup"
          // className={cn(
          //   'text-sm font-medium transition-colors hover:text-[#EBD6B7] text-black'
          // )}
        >
          <SimcosButton
            variant={"nav"}
            size={'sm'}
            className={bevan.className}
          >
            SIGNUP
          </SimcosButton>
      </Link>
    </nav>
  )
};

export default SubMainNav;