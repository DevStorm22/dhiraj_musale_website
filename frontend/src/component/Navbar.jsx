import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
    return (
        <div className="text-white p-4 items-center text-center justify-center flex flex-col">
            <ul className="flex space-x-4 gap-x-3">
                <li className='hover:scale-110 ease-in-out duration-175'><a href="#home" className="text-[25px] font-bold hover:text-amber-400">Home</a></li>
                <li className='hover:scale-110 ease-in-out duration-175'><a href="#video-editing" className="text-[25px] font-bold hover:text-amber-400">Video Editing</a></li>
                <li className='hover:scale-110 ease-in-out duration-175'><a href="#animation" className="text-[25px] font-bold hover:text-amber-400">Animation <FontAwesomeIcon icon={faChevronDown} className='text-[15px] mb-0.5' /></a></li>
                <li className='hover:scale-110 ease-in-out duration-175'><a href="#vfx" className="text-[25px] font-bold hover:text-amber-400">VFX</a></li>
                <li className='hover:scale-110 ease-in-out duration-175'><a href="#graphics" className="text-[25px] font-bold hover:text-amber-400">Graphics Design</a></li>
                <li className='hover:scale-110 ease-in-out duration-175'><a href="#about" className="text-[25px] font-bold hover:text-amber-400">About</a></li>
                <li className='hover:scale-110 ease-in-out duration-175'><a href="#contact" className="text-[25px] font-bold hover:text-amber-400">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar