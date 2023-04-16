import { BsPinterest, BsInstagram } from "react-icons/bs"
import { GrFacebook } from "react-icons/gr"

const Footer = () => {
  return (
    <footer className='grid items-end justify-center '>
      <div className='pb-5  md:pb-10 space-y-4'>
        <div className='flex justify-center space-x-8'>
          <a href='#'>
            <GrFacebook className='fill-clGrayishBlue scale-150 transition-colors hover:fill-clSoftRed '></GrFacebook>
          </a>
          <a href='#'>
            <BsPinterest className='fill-clGrayishBlue scale-150 transition-colors hover:fill-clSoftRed'></BsPinterest>
          </a>
          <a href='#'>
            <BsInstagram className='fill-clGrayishBlue scale-150 transition-colors hover:fill-clSoftRed'></BsInstagram>
          </a>
        </div>
        <div className='text-center rounded-t-xl text-clGrayishBlue '>
          Challenge by
          <a
            className='px-1 font-bold transition-colors underline hover:text-clSoftRed'
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
          >
            Frontend Mentor
          </a>
          . Coded by
          <a
            className='px-1 font-bold transition-colors underline hover:text-clSoftRed'
            href='https://github.com/amirhazizi'
            target='_blank'
          >
            Amir Hossein Azizi
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
