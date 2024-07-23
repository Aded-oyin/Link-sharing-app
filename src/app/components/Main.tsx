import Image from "next/image"
import Phones from '../../../public/Phones.svg'

const Main = () => {
  return (
    <div>

        <div className="hidden lg:flex justify-between h-[700px] max-w-[1300px] mx-auto">
            <div className="bg-white w-[450px]">

            </div>

            <div className="bg-white w-[800px]">
                <div className="w-[728px] mx-auto m-7">
                    <h1 className="text-2xl font-bold">Customize your Links</h1>
                    <p className="text-[16px] text-[#737373] pt-5">Add/edit/remove links below and then share all your profiles with the world!</p>
                    <button className="w-[728px] h-[46px] border border-[#633CFF] rounded-md mt-10 hover:bg-[#EFEBFF] text-[#633CFF]">
                        + Add new Link
                    </button>
                    <div className="bg-[#FAFAFA] w-[728px] h-[400px] mt-20 flex flex-col justify-center items-center">
                        <Image src={Phones} alt="phones"/>
                        <div className="w-[500px] text-center items-center">
                            <h1 className="text-2xl font-bold">{"Let's"} get you started</h1>
                            <p>Use the {'"Add new link"'} button to get started. Once you have more than one link, you can reorder and edit them. {"We're"} here to help you share your profiles with everyone!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="lg:hidden bg-white w-[500px] md:w-[721px] mx-auto">
                <div className="w-[295px] md:w-[641px] mx-auto m-7">
                    <h1 className="text-2xl font-bold">Customize your Links</h1>
                    <p className="text-[16px] text-[#737373] pt-5">Add/edit/remove links below and then share all your profiles with the world!</p>
                    <button className="w-[295px] md:w-[641px] h-[46px] border border-[#633CFF] rounded-md mt-10 hover:bg-[#EFEBFF] text-[#633CFF]">
                        + Add new Link
                    </button>
                    <div className="bg-[#FAFAFA] w-[295px] md:w-[641px] h-[400px] mt-20 flex flex-col justify-center items-center">
                        <Image src={Phones} alt="phones"/>
                        <div className="text-center items-center md:w-[470px]">
                            <h1 className="text-2xl font-bold">{"Let's"} get you started</h1>
                            <p>Use the {'"Add new link"'} button to get started. Once you have more than one link, you can reorder and edit them. {"We're"} here to help you share your profiles with everyone!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main