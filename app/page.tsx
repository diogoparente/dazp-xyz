import NavProvider from "./context/nav-context"
import { About, Career, Intro, Skills } from "./sections"

export default function IndexPage() {
  return (
    <NavProvider>
      <section className="container flex w-full flex-col items-center gap-10 pb-8 pt-6 md:py-10">
        <Intro />
        <About />
        <Skills />
        <Career />
      </section>
    </NavProvider>
  )
}
