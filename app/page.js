
'use strict'
import { Header } from "./lib/components/Header"
import { Banner} from './lib/components/Banner'
import { NavbarBottom } from "./lib/components/Navbar-Bottom"
import { Footer } from "./lib/components/Footer"



export default function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Footer />
      <NavbarBottom />
    </>
  )
}