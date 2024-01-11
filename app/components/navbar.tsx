import Image from 'next/image';
import '../globals.css';
import Link from 'next/link';
//import AboutUs from '../AboutUs.tsx'; 

const Navbar = () => {
    return(
        <div className="text-center z-30">
            <main className="p-24">
            <Link href="../AboutUs.tsx">
                <button className="black-white-button mt-11">
                    About
                </button>
            </Link>
            </main>
        </div>    
    )
}

export default Navbar;