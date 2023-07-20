import Nav from "./components/Nav/page"
import Content from "./components/Content/page"
import Header from "./components/Header/page"
import Hero from "./components/Hero/page"
import { ItemsProvider } from "./itemsContext/itemsContext"

export default function Home() {
  return (
    <ItemsProvider>
      <main className='flex flex-col items-center w-full h-screen '>
        <Header />
        <Hero />
        <Nav />
        <Content/>
      </main>
    </ItemsProvider>
  )
}
