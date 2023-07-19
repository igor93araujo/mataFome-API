import Aside from "./components/Aside/page"
import Content from "./components/content/page"
import { ItemsProvider } from "./itemsContext/itemsContext"

export default function Home() {
  return (
    <ItemsProvider>
      <main
        className='flex flex-wrap justify-between items-center w-full h-screen bg-gray-100'
      >
        <Aside />
        <Content/>
      </main>
    </ItemsProvider>
  )
}
