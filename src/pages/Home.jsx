import { Exercises, Hero, Navbar, SearchExercises } from "../components"
import SearchField from "../components/SearchField"
import { Section } from "../components"
import { useState } from "react"

const Home = () => {
  const [ exercises, setExercises ] = useState([])
  const [ exoSelected, setExoSelected ] = useState('all')

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
            <SearchField setExercises={setExercises}/>
          </div>
        </Section>
        <Section title='Our Program' description="Build Yor best body">
          <SearchExercises setExoSelected={setExoSelected} />
        </Section>
        <Section title='Exercises' description="Check out the most effective exercises personalized to you" id='exercises'>
          <Exercises setExercises={setExercises} exercises={exercises} exoSelected={exoSelected} />
        </Section>
      </div>
    </div>
  )
}

export default Home