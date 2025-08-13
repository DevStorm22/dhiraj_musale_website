import Navbar from './Navbar'

function Header() {
    return (
        <div className="text-white flex flex-row">
            <div className="flex items-start justify-center w-auto m-2 flex-col">
                <h1 className="text-[40px] font-bold hover:scale-102 ease-in-out duration-175 cursor-pointer">DHIRAJ MUSALE</h1>
                <p className="text-[15px] font-bold hover:scale-102 ease-in-out duration-175 cursor-pointer">MOTION DESIGNER / 3D & VFX GENERALIST</p>
            </div>
            <div className="flex items-center w-[70%] justify-center ml-[60px]">
                <Navbar />
            </div>
        </div>
    )
}

export default Header