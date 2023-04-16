import { useEffect, useState, useRef } from "react"
const specialTime = parseInt(new Date(2023, 3, 30).getTime().toString())
const Main = () => {
  const [specialDate, setSpecialDate] = useState(specialTime)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const secondFront = useRef<HTMLInputElement>(null)
  const secondBack = useRef<HTMLInputElement>(null)
  useEffect(() => {
    const repeater = setInterval(() => {
      const currentTime = parseInt(new Date().getTime().toString())
      const time = specialDate - currentTime
      const oneDay = 24 * 60 * 60 * 1000
      const oneHour = 60 * 60 * 1000
      const oneMinute = 60 * 1000
      setDays(Math.floor(time / oneDay))
      let tempTime = time % oneDay
      setHours(Math.floor(tempTime / oneHour))
      tempTime = tempTime % oneHour
      setMinutes(Math.floor(tempTime / oneMinute))
      tempTime = tempTime % oneMinute
      setSeconds(Math.floor(tempTime / 1000))
    }, 1000)
    return () => clearInterval(repeater)
  }, [])

  return (
    <main className='grid place-items-center'>
      <div className='text-white mx-auto space-y-10 md:space-y-20'>
        <h1 className='header uppercase text-xl max-w-xs mx-auto text-center md:max-w-sm'>
          We're Launching Soon
        </h1>
        <div className='grid grid-cols-4 gap-x-3 mx-auto md:gap-6 overflow-hidden'>
          <div className='space-y-5'>
            <div className='card-container overflow-x-hidden'>
              <div className='card-front'>
                <div className='card bg-gray-800 rounded-md'></div>
                <div className='card card-bottom bg-gray-700 rounded-md border-b-8 rounded-b-xl border-b-clVerydarkBlue_2 '></div>
                <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90 md:text-7xl'>
                  {days > 9 ? days : `0${days}`}
                </h1>
              </div>
              <div className='card-back'>
                <div className='card bg-gray-800 rounded-md'></div>
                <div className='card card-bottom bg-gray-700 rounded-md border-b-8 rounded-b-xl border-b-clVerydarkBlue_2 '></div>
                <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90 md:text-7xl'>
                  {days > 9 ? days : `0${days}`}
                </h1>
              </div>
              <div className='absolute w-3 h-3 rounded-full top-1/2 left-0 bg-clVerydarkBlue_2 -translate-y-1/2 -translate-x-1/2'></div>
              <div className='absolute w-3 h-3 rounded-full top-1/2 right-0 bg-clVerydarkBlue_2 -translate-y-1/2 translate-x-1/2'></div>
              <div className='absolute w-full h-px bg-clVerydarkBlue_2 top-1/2 left-0 opacity-60'></div>
            </div>
            <p className='card-text uppercase text-clGrayishBlue'>Days</p>
          </div>
          <div className='space-y-5'>
            <div className='card-container overflow-x-hidden'>
              <div className='card-front'>
                <div className='card bg-gray-800 rounded-md'></div>
                <div className='card card-bottom bg-gray-700 rounded-md border-b-8 rounded-b-xl border-b-clVerydarkBlue_2 '></div>
                <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90 md:text-7xl'>
                  {hours > 9 ? hours : `0${hours}`}
                </h1>
              </div>
              <div className='card-back'>
                <div className='card bg-gray-800 rounded-md'></div>
                <div className='card card-bottom bg-gray-700 rounded-md border-b-8 rounded-b-xl border-b-clVerydarkBlue_2 '></div>
                <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90 md:text-7xl'>
                  {hours > 9 ? hours : `0${hours}`}
                </h1>
              </div>
              <div className='absolute w-3 h-3 rounded-full top-1/2 left-0 bg-clVerydarkBlue_2 -translate-y-1/2 -translate-x-1/2'></div>
              <div className='absolute w-3 h-3 rounded-full top-1/2 right-0 bg-clVerydarkBlue_2 -translate-y-1/2 translate-x-1/2'></div>
              <div className='absolute w-full h-px bg-clVerydarkBlue_2 top-1/2 left-0 opacity-60'></div>
            </div>
            <p className='card-text uppercase text-clGrayishBlue'>Hours</p>
          </div>
          <div className='space-y-5'>
            <div className='card-container overflow-x-hidden'>
              <div className='card-front'>
                <div className='card bg-gray-800 rounded-md'></div>
                <div className='card card-bottom bg-gray-700 rounded-md border-b-8 rounded-b-xl border-b-clVerydarkBlue_2 '></div>
                <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90 md:text-7xl'>
                  {minutes > 9 ? minutes : `0${minutes}`}
                </h1>
              </div>
              <div className='card-back'>
                <div className='card bg-gray-800 rounded-md'></div>
                <div className='card card-bottom bg-gray-700 rounded-md border-b-8 rounded-b-xl border-b-clVerydarkBlue_2 '></div>
                <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90 md:text-7xl'>
                  {minutes > 9 ? minutes : `0${minutes}`}
                </h1>
              </div>
              <div className='absolute w-3 h-3 rounded-full top-1/2 left-0 bg-clVerydarkBlue_2 -translate-y-1/2 -translate-x-1/2'></div>
              <div className='absolute w-3 h-3 rounded-full top-1/2 right-0 bg-clVerydarkBlue_2 -translate-y-1/2 translate-x-1/2'></div>
              <div className='absolute w-full h-px bg-clVerydarkBlue_2 top-1/2 left-0 opacity-60'></div>
            </div>
            <p className='card-text uppercase text-clGrayishBlue'>Minutes</p>
          </div>
          <div className='space-y-5 relative'>
            <div className='card-container '>
              <div ref={secondFront} className='card-front  card-display'>
                <div className='card bg-gray-800 rounded-md'></div>
                <div className='card card-bottom bg-gray-700 rounded-md border-b-8 rounded-b-xl border-b-clVerydarkBlue_2 '></div>
                <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90 md:text-7xl'>
                  {seconds > 9 ? seconds : `0${seconds}`}
                </h1>
              </div>
              <div ref={secondBack} className='card-back '>
                <div className='card bg-gray-800 rounded-md'></div>
                <div className='card card-bottom bg-gray-700 rounded-md border-b-8 rounded-b-xl border-b-clVerydarkBlue_2 '></div>
                <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90 md:text-7xl'>
                  {seconds > 9 ? seconds : `0${seconds}`}
                </h1>
              </div>
              <div className='absolute w-3 h-3 rounded-full top-1/2 left-0 bg-clVerydarkBlue_2 -translate-y-1/2 -translate-x-1/2 z-10'></div>
              <div className='absolute w-3 h-3 rounded-full top-1/2 right-0 bg-clVerydarkBlue_2 -translate-y-1/2 translate-x-1/2 z-10'></div>
              <div className='absolute w-full h-px bg-clVerydarkBlue_2 top-1/2 left-0 opacity-60'></div>
            </div>
            <p className='card-text uppercase text-clGrayishBlue'>Seconds</p>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Main
