import { Timer } from '../../components/timer'
import imgSantaTimer from '../../assets/timer-santa.png'

export function TimeChristma() {
  return (
    <>
      <p className="text-8xl sm:text-9xl font-semibold text-center my-6">Caicedo</p>
      <div className="flex flex-col items-center">
        <p className="text-2xl font-medium mt-6 mb-10">How long until christmas?</p>
        <div className="w-full flex justify-around items-center md:flex-col">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <Timer />
            <Timer />
            <Timer />
            <Timer />
          </div>
          <img
            alt="Santa claus contando el tiempo para la navidad"
            className="max-h-64 sm:max-h-72 sm:mt-10"
            src={imgSantaTimer}
          />
        </div>
      </div>
    </>
  )
}
