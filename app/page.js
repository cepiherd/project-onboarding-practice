
'use strict'
import { Header } from "./lib/components/Header"
import { Banner} from './lib/components/Banner'
import { NavbarBottom } from "./lib/components/Navbar-Bottom"
import { Footer } from "./lib/components/Footer"
import { DonasiOtomatis } from "./lib/components/Donasi-Otomatis"
import { Menu } from "./lib/components/Menu"



export default function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Menu />
      <DonasiOtomatis/>
      <Footer />
      <NavbarBottom />
    </>
  )
}