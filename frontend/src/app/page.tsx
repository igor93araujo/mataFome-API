import Aside from "./components/Aside/page"
import Content from "./components/content/page"

export default function Home() {
  return (
    <main
      className='flex flex-wrap justify-between items-center w-full h-screen bg-gray-100'
    >
      <Aside />
      <Content/>
    </main>
  )
}
