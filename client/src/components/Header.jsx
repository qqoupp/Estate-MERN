import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-emerald-500 opacity-90 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
</svg>

                <span className='text-green-100'>Your</span>
                <span className='text-green-800'>Home</span>
            </h1>
            </Link>
        
        <form className='bg-slate-100 p-3 rounded-xl flex items-center'>
            <input type='text' placeholder='Search..' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-500'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
                <li className='hidden sm:inline text-white hover:text-slate-800'>Home</li>
            </Link>
            <Link to='/about'>
                <li className='hidden sm:inline text-white hover:text-slate-800'>About</li>
            </Link>
            <Link to='/sign-in'>
                <li className=' text-white hover:text-slate-800'>Sign in</li>
            </Link>
            
        </ul>
        </div>
       
    </header>
  )
}

export default Header;