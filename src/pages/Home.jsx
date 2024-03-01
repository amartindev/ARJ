import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { Gallery } from "../components/Gallery"
import { Hero } from "../components/Hero"
import { InfoBanner } from "../components/InfoBanner"
import { InfoIcons } from "../components/InfoIcons"

export const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <InfoIcons></InfoIcons>
        <InfoBanner></InfoBanner>
        <Gallery></Gallery>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}
