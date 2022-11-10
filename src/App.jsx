import './App.css'

import Snowfall from 'react-snowfall'

import imgSantaHero from './assets/santa_hero.png'
import { TimeChristma } from './pages/timeChristma'

export const App = () => {
  return (
    <>
      <main className="w-full h-screen bg-[#212E37]">
        <Snowfall snowflakeCount={400} />
        <div className="max-w-6xl h-full grid grid-cols-1 items-center md:grid-cols-3 mx-auto">
          <section
            className="col-span-2 sm:full w-full md:h-full px-4 md:px-0
          md:flex flex-col md:items-center md:justify-center"
          >
            <TimeChristma />
          </section>
          <section className="col-span-1 hidden md:flex items-center">
            <img alt="Santa claus con un reno y arbol de navidad" src={imgSantaHero} />
          </section>
        </div>
      </main>
    </>
  )
}
