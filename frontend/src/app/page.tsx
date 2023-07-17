import Aside from "./components/Header/page"
import Content from "./components/content/page"

export default function Home() {
  return (
    <main>
      <Aside />
      <h1>Home</h1>
      <Content/>
    </main>
  )
}
