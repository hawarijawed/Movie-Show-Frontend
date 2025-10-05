import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'
import { SignInButton, useClerk, UserButton, useUser } from '@clerk/clerk-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { OpenSignIn } = useClerk();
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between
      px-6 md:px-16 lg:px-36 py-5 '>

      {/* Logo */}
      <Link to="/" className='max-md:flex-1'>
        <img src={assets.logo} alt="logo" className='w-36 h-auto' />
      </Link>

      {/* Navigation Menu - shown on md+ and toggled on small screens */}
      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium
        max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center
        gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full 
        backdrop-blur bg-black/70 md:bg-white/10 md:border 
        border-gray-300/20 overflow-hidden transition-[width]
        duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>

        {/* X Icon - only visible on small screens */}
        <XIcon
          className='absolute top-6 right-6 w-6 h-6 cursor-pointer md:hidden'
          onClick={() => setIsOpen(false)}
        />

        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/">Home</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/movies">Movies</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/theatre">Theatres</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/releases">Release</Link>
        <Link onClick={() => { scrollTo(0, 0); setIsOpen(false); }} to="/favorites">Favorites</Link>
      </div>

      {/* Right side icons: search & login (only visible on md+) */}
      <div className='items-center gap-8 hidden md:flex'>
        <SearchIcon className='w-6 h-6 cursor-pointer' />
        {!user ? (
          <SignInButton mode='modal' >
            <button onClick={OpenSignIn} className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull
              transition rounded-full font-medium cursor-pointer'>
              Login
            </button>
          </SignInButton>

        ) : (
          <UserButton />
        )}
      </div>

      {/* Menu icon - visible only on small screens */}
      {!isOpen && <MenuIcon
        className='w-8 h-8 cursor-pointer md:hidden'
        onClick={() => setIsOpen(true)}
      />}
    </div>
  );
};


export default Navbar
