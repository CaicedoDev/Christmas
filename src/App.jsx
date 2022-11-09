import './App.css'

import imgSantaHero from './assets/santa_hero.png'
import { TimeChristma } from './pages/timeChristma'

export const App = () => {
  return (
    <>
      <main className="w-full h-screen bg-red-100">
        <div className="max-w-6xl h-full grid grid-cols-1 items-center md:grid-cols-3 mx-auto">
          <section className="col-span-2 sm:h-4/5 md:h-full px-4 md:px-0">
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
