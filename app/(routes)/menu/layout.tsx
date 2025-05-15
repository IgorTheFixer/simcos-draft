import Header from "@/components/Header"
import Footer from "@/components/Footer"

const MenuLayout = ({children} :{ children: React.ReactNode}) =>{
  return (
    <div className="
      flex 
      flex-col 
      items-center 
      min-h-screen 
      bg-white
      ">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default MenuLayout