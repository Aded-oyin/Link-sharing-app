import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Vector from '../../../public/Vector.png'
import Profile from '../../../public/profile.png'
import Eye from '../../../public/eye.png'

const Navbar = () => {
  return (
    <div>
      <div className="hidden md:flex bg-white justify-between m-4 items-center max-w-[1300px] h-[60px] mx-auto">
        <h1 className="font-bold text-[23px] flex p-3 items-center">
          <Image src={Logo} alt="logo" width={30} height={30} />
          <span className="ml-2">devlinks</span>
        </h1>
        <div className='hidden md:flex w-[270px] justify-between items-center'>
          <button className='text-[#633CFF] bg-[#EFEBFF] flex h-[40px] w-[100px] mx-2 py-2 rounded-md hover:scale-105 duration-300'>
            <Image src={Vector} alt="vector" width={20} height={20} className='ml-3'/>
            <span className="ml-2">Links</span>
          </button>
          <button className='text-[#737373] flex items-center group hover:text-[#633CFF]'>
            <Image src={Profile} alt="vector" width={20} height={20} className='group-hover-image' />
            <span className="ml-2 group-hover:text-[#633CFF]">Profile Details</span>
          </button>
        </div>
        <div className="hidden md:flex p-3">
          <button className='text-[#633CFF] border-[#633CFF] border h-[40px] w-[100px] font-bold mx-2 py-2 rounded-md hover:scale-105 duration-300'>
            Preview
          </button>
        </div>
      </div>

      {/*Mobile Menu*/}
      <div className='md:hidden bg-white h-[80px] w-full flex justify-between items-center'>
        <Image src={Logo} alt="logo" width={40} height={40} className='m-4' />
        <button className='text-[#633CFF] bg-[#EFEBFF] h-[50px] w-[70px] px-4 rounded-md hover:scale-105 duration-300'>
          <Image src={Vector} alt="vector" width={35} height={35}/>
        </button>
        <button className='group hover:text-[#633CFF]'>
          <Image src={Profile} alt="profile" width={35} height={35} className='group-hover-image' />
        </button>
        <button className='text-[#633CFF] border-[#633CFF] border h-[50px] w-[60px] m-4 px-3 rounded-md hover:scale-105 duration-300'>
          <Image src={Eye} alt="vector" width={35} height={35} className=''/>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
