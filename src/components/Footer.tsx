import { BsPinterest, BsInstagram } from "react-icons/bs"
import { GrFacebook } from "react-icons/gr"

const Footer = () => {
  return (
    <footer className='grid items-end justify-center '>
      <div className='flex pb-8 space-x-8 md:pb-16'>
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
    </footer>
  )
}
export default Footer
