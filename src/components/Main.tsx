import { useEffect, useState } from "react"
const specialTime = parseInt(new Date(2023, 4, 1).getTime().toString())
const Main = () => {
  const [specialDate, setSpecialDate] = useState(specialTime)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const repeater = setInterval(() => {
      const currentTime = parseInt(new Date().getTime().toString())
      const time = specialDate - currentTime
      const oneDay = 24 * 60 * 60 * 1000
      const oneHour = 60 * 60 * 1000
      const oneMinute = 60 * 1000
      let tempTime = time
      setDays(Math.floor(tempTime / oneDay))
      tempTime = Math.floor(time % oneDay)
      setHours(Math.floor(tempTime / oneHour))
      tempTime = Math.floor(tempTime % oneHour)
      setMinutes(Math.floor(tempTime / oneMinute))
      tempTime = Math.floor(tempTime % oneMinute)
      setSeconds(Math.floor(tempTime / 1000))
    }, 1000)
    return () => clearInterval(repeater)
  }, [])

  return (
    <main className='grid place-items-center'>
      <div className='text-white mx-auto space-y-10'>
        <h1 className='header uppercase text-xl max-w-xs mx-auto text-center'>
          We're Launching Soon
        </h1>
        <div className='grid grid-cols-4 gap-x-3 mx-auto'>
          <div className='space-y-5'>
            <div className='card-container relative '>
              <div className='card bg-gray-800 rounded-md rounded-b-lg '></div>
              <div className='card bg-gray-700 rounded-md rounded-t-lg'></div>
              <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90'>
                {days > 9 ? days : `0${days}`}
              </h1>
            </div>
            <p className='card-text uppercase text-clGrayishBlue'>Days</p>
          </div>
          <div className='space-y-5'>
            <div className='card-container relative '>
              <div className='card bg-gray-800 rounded-md rounded-b-lg '></div>
              <div className='card bg-gray-700 rounded-md rounded-t-lg'></div>
              <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90'>
                {hours > 9 ? hours : `0${hours}`}
              </h1>
            </div>
            <p className='card-text uppercase text-clGrayishBlue'>Hours</p>
          </div>
          <div className='space-y-5'>
            <div className='card-container relative '>
              <div className='card bg-gray-800 rounded-md rounded-b-lg '></div>
              <div className='card bg-gray-700 rounded-md rounded-t-lg'></div>
              <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90'>
                {minutes > 9 ? minutes : `0${minutes}`}
              </h1>
            </div>
            <p className='card-text uppercase text-clGrayishBlue'>Minutes</p>
          </div>
          <div className='space-y-5'>
            <div className='card-container relative '>
              <div className='card bg-gray-800 rounded-md rounded-b-lg '></div>
              <div className='card bg-gray-700 rounded-md rounded-t-lg'></div>
              <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90'>
                {seconds > 9 ? seconds : `0${seconds}`}
              </h1>
            </div>
            <p className='card-text uppercase text-clGrayishBlue '>seconds</p>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Main
