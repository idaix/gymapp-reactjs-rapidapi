import { Hero, Navbar } from "../components"
import SearchField from "../components/SearchField"
import { Section } from "../components"

const Home = () => {
  return (
    <div>
      <div className="bg-transparent px-3 py-5 absolute w-full">
        <Navbar />
      </div>
      <Hero />
      <div className="container mx-auto px-3">
        <Section
          title='Discover'
          description="Awesome Exercises You Should Know"
        >
          <div className="md:px-10">
            <SearchField />
          </div>
        </Section>
        <Section title='Our Program' description="Build Yor best body">hello</Section>
        <Section title='Exercises' description="Check out the most effective exercises personalized to you" id='exercises'>hello</Section>
      </div>
    </div>
  )
}

export default Home