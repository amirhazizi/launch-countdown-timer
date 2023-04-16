const Main = () => {
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
                00
              </h1>
            </div>
            <p className='card-text uppercase text-clGrayishBlue'>Days</p>
          </div>
          <div className='space-y-5'>
            <div className='card-container relative '>
              <div className='card bg-gray-800 rounded-md rounded-b-lg '></div>
              <div className='card bg-gray-700 rounded-md rounded-t-lg'></div>
              <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90'>
                00
              </h1>
            </div>
            <p className='card-text uppercase text-clGrayishBlue'>Hours</p>
          </div>
          <div className='space-y-5'>
            <div className='card-container relative '>
              <div className='card bg-gray-800 rounded-md rounded-b-lg '></div>
              <div className='card bg-gray-700 rounded-md rounded-t-lg'></div>
              <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90'>
                00
              </h1>
            </div>
            <p className='card-text uppercase text-clGrayishBlue'>Minutes</p>
          </div>
          <div className='space-y-5'>
            <div className='card-container relative '>
              <div className='card bg-gray-800 rounded-md rounded-b-lg '></div>
              <div className='card bg-gray-700 rounded-md rounded-t-lg'></div>
              <h1 className='absolute top-1/2 left-1/2 text-clSoftRed -translate-x-1/2 -translate-y-1/2 text-4xl opacity-90'>
                00
              </h1>
            </div>
            <p className='card-text uppercase text-clGrayishBlue '>Seconds</p>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Main
