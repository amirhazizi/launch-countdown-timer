import { BsPinterest, BsInstagram } from "react-icons/bs"
import { GrFacebook } from "react-icons/gr"

const Footer = () => {
  return (
    <footer className='grid items-end justify-center '>
      <div className='flex pb-8 space-x-8 md:pb-16'>
        <GrFacebook className='fill-clGrayishBlue scale-150 transition-colors hover:fill-clSoftRed'></GrFacebook>
        <BsPinterest className='fill-clGrayishBlue scale-150 transition-colors hover:fill-clSoftRed'></BsPinterest>
        <BsInstagram className='fill-clGrayishBlue scale-150 transition-colors hover:fill-clSoftRed'></BsInstagram>
      </div>
    </footer>
  )
}
export default Footer
