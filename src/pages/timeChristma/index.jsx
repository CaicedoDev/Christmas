import { useEffect, useState } from 'react'

import { Timer } from '../../components/timer'
import { PresentationCaicedo } from '../../components/presentation'
import imgSantaTimer from '../../assets/timer-santa.png'

export function TimeChristma() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const dateChristma = new Date('12/25/2022 23:59:59')

    const interval = setInterval(() => {
      const todayTimeDate = new Date()
      const christmasDate = dateChristma.getTime() - todayTimeDate.getTime()

      const d = Math.floor(christmasDate / (1000 * 60 * 60 * 24))

      setDays(d)

      const h = Math.floor((christmasDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

      setHours(h)

      const m = Math.floor((christmasDate % (1000 * 60 * 60)) / (1000 * 60))

      setMinutes(m)

      const s = Math.floor((christmasDate % (1000 * 60)) / 1000)

      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="w-full text-6xl sm:text-8xl font-semibold">
        <PresentationCaicedo />
      </div>
      <div className="flex flex-col items-center w-full">
        <p className="text-2xl font-medium my-8 text-white">How long until christmas?</p>
        <div className="w-full flex justify-around items-center md:flex-col">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-white">
            <Timer text={'days'} time={days} />
            <Timer text={'hours'} time={hours} />
            <Timer text={'minutes'} time={minutes} />
            <Timer text={'seconds'} time={seconds} />
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
